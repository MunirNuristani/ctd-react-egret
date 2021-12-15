import { useContext } from 'react'
import { Link } from "react-router-dom"
import { NavigationData } from './NavigationData'
import './style.css'
import { totalTaskContext, SideMenuContext } from '../context/Context'
import Moment from 'moment'


const LeftSideNav = () => {
// eslint-disable-next-line
    const { fullTaskList, setFullTaskList } = useContext(totalTaskContext)
    const { showSideMenu, setShowSideMenu } = useContext(SideMenuContext)
    const today = Moment(new Date()).format("YYYY-MM-DD")
    const showSide = () => {
        setShowSideMenu(!showSideMenu)
    }


    return (
        <>
            <nav className={showSideMenu ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSide}>

                    {NavigationData.map((item, index) => {

                        return (
                            <li key={index} className='nav-item'>
                                <Link to={item.path} className='nav-unit'>
                                    <div className="nav-icon">    {item.icon} </div>
                                    <div className='nav-sub'>
                                        <span className='Top-sub-nav'> {item.title} </span>
                                        {(item.title === 'Today') ? ((fullTaskList.filter(item => item.fields.Due_Date === today)).length) :
                                            (item.title === 'Complete') ? ((fullTaskList.filter((item) => item.fields.Complete === true)).length) :
                                                (item.title === 'Important') ? ((fullTaskList.filter((item) => item.fields.Priority === true)).length) :
                                                    (item.title === 'Over Due') ? ((fullTaskList.filter((item) => item.fields.Due_Date < today)).length) :
                                                        (item.title === 'Work') ? ((fullTaskList.filter((item) => item.fields.tableName === 'Work')).length) :
                                                            (item.title === 'Personal') ? ((fullTaskList.filter((item) => item.fields.tableName === 'Personal')).length) :
                                                                (item.title === 'Gaming') ? ((fullTaskList.filter((item) => item.fields.tableName === 'Gaming')).length) : 0
                                        } Tasks
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

export default LeftSideNav;
