import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"
import { NavigationData } from './NavigationData'
import './Navigation.css'
import FetchGet from './FetchElement'

const Navigation = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toogle'>
                        <Link to='#' className='menu-bars'>
                            <IoMdClose />
                        </Link>
                    </li>

                    {NavigationData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link to={item.path}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span> {item.title} </span>
                                        <div className='sub-nav-text'>
                                            <FetchGet title={item.title} />
                                            Tasks Pending
                                        </div>
                                    </div>
                                </Link>
                            </ li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
