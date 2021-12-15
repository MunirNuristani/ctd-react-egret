import React, { useContext, useState, useEffect } from 'react';
import { RiUser3Line, RiSettings5Line, RiMenuLine } from 'react-icons/ri'
import { SideMenuContext, rightSettingContext } from '../context/Context';
import Spin from 'react-cssfx-loading/lib/Spin'
import './style.css'
import WeatherModal from './weatherModal';
import SigninModal from './SigninModal'


function MobileNav() {
    const { showSideMenu, setShowSideMenu } = useContext(SideMenuContext)
    const [showModal, setShowModal] = useState(false)
    const [location, setLocation] = useState()
    // eslint-disable-next-line
    const [error, setError] = useState(false)
    const [weather, setWeather] = useState()
    const  [ showSignin, setShowSignin] = useState(false)
    const { showSetting, setShowSetting } = useContext(rightSettingContext)
    const show = () => { setShowSideMenu(!showSideMenu) }
    const handleShow = () => setShowModal(true)
    const handleHide = () => setShowModal(false)
    const toggleRightNav = () => { setShowSetting(!showSetting) }
    const hideSignin = () =>{setShowSignin(!showSignin)}

    useEffect(() => {
        const getLocation = async () => {
            await navigator.geolocation.getCurrentPosition(pos => setLocation([pos.coords.latitude, pos.coords.longitude]), () => setError(true))
        }
        if (!location) { getLocation() }
        const getWeather = async () => {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.join(',')}&aqi=no`)
            setWeather(await response.json());
        }
        if (location) { getWeather() }
    }, [location])
    return (
        <>
            <SideMenuContext.Provider value={{ showSideMenu, setShowSideMenu }}>
                <div className='mobile-navbar'>
                    <div className='mobile-menu-icon mobile-menu-items' onClick={show}>
                        < RiMenuLine  />
                    </div>
                        <div className='mobile-menu-weather  mobile-menu-items' onClick={handleShow}>
                            {weather ? (weather.current.temp_f) : <Spin style={{ size: "8px" }} />} &#x00B0;
                        </div>
                        <div onClick={hideSignin} className='mobile-menu-icon  mobile-menu-items'>
                        <RiUser3Line  />
                        </div>
                        <div onClick={toggleRightNav} className='mobile-menu-icon  mobile-menu-items'>
                             <RiSettings5Line  />
                        </div>
                        
                    <SigninModal show={showSignin} onHide={hideSignin} />
                    <WeatherModal show={showModal} onHide={handleHide} icon={weather ? weather.current.condition.icon : ''} location={weather ? (weather.location.name + ', ' + weather.location.region + ' ') : ''} degree={weather ? weather.current.temp_f : '00'} condition={weather ? weather.current.condition.text : ''} />
                </div>
            </SideMenuContext.Provider>
        </>
    )

}

export default MobileNav
