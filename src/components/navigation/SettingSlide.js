import "./style.css"
import { Theme } from "./Themes";
import {useRef, useState} from 'react'
import PropTypes from 'prop-types'

const SettingSlide = ({show}) => {
    const fontRef = useRef()
    const [font, setFont] = useState('')

    const changeTheme = (item) =>{
    document.documentElement.style.setProperty('--primary-color', item.primary)
    document.documentElement.style.setProperty('--secondry-color', item.secondry)
    document.documentElement.style.setProperty('--hover-color', item.hover)
    document.documentElement.style.setProperty('--background-color', item.background)
} 

const changeFont = () =>{
    setFont( fontRef.current?.value)
    document.documentElement.style.setProperty('--bs-body-font-family', font);
}

    return (
        <>
            <div className={`setting-slide ${show?'active':''}`}>
            <span className="setting-slide-color-scheme-text">Select Theme</span>
                <div className="setting-slide-color-scheme">
                   
                    <div className="colors hover-color color-1" onClick={()=>{changeTheme(Theme.theme_1)}}></div>
                    <div className="colors hover-color color-2" onClick={()=>{changeTheme(Theme.theme_2)}}></div>
                    <div className="colors hover-color color-3" onClick={()=>{changeTheme(Theme.theme_3)}}></div>
                    <div className="colors hover-color color-4" onClick={()=>{changeTheme(Theme.theme_4)}}></div>
                    <div className="colors hover-color color-5" onClick={()=>{changeTheme(Theme.theme_5)}}></div>
                    <div className="colors hover-color color-6" onClick={()=>{changeTheme(Theme.theme_6)}}></div>
                    
                </div>
                <div className="color-text hover-color"  onClick={()=>{changeTheme(Theme.theme_default)}}> Default Theme</div>
                <div className="setting-slide-font-select">
                    <label htmlFor="fontSelect">Select Font</label>
                    <select name="" className="setting-slide-font-options" ref={fontRef} onChange={changeFont}>
                        <option value={'Open Sans , sans-serif'}> Default Font</option>
                        <option value={'Karla, sans-serif'}> Karla </option>
                        <option value={'Poppins , sans-serif'}> Poppins </option>
                        <option value={'Raleway, sans-serif'}> Raleway </option>
                        <option value={'Ubuntu, sans-serif'}> Ubuntu </option>
                    </select>
                </div>
            </div>
        </>
    );
};
SettingSlide.propTypes ={
    show: PropTypes.bool.isRequired,
}

export default SettingSlide;
