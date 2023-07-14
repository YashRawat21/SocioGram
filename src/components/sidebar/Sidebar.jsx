import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./Sidebar.css"
import MenuLink from '../menuLink/MenuLink';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
   const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <MenuLink Icon = {<RssFeedIcon />} text = "Feed"/>
            <MenuLink Icon = {<ExploreIcon />} text = "Explore"/>
            <MenuLink Icon = {<BookmarkIcon />} text = "Bookmark"/>
            <span onClick={() => dispatch({type : "TOGGLE"})}>
            <MenuLink Icon = {<DarkModeIcon />} text = "Theme"/>

            </span>
            <MenuLink Icon = {<LogoutIcon />} text = "Logout"/>
            <button className="sidebarBtn">Show More</button>
            <hr className="sidebarHr" />

            <ul className="sidebarFriendList">
                <li className='sidebarFriend'>
                    <img src="assets/friend1.jpg" alt="" className="sidebarFriendImg" />
                 <span className="sidebarFriendName">Janet_22</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                 <span className="sidebarFriendName">Isabel_23</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="assets/friend3.jpg" alt="" className="sidebarFriendImg" />
                 <span className="sidebarFriendName">Beverly_24</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="assets/friend4.jpg" alt="" className="sidebarFriendImg" />
                 <span className="sidebarFriendName">Glenna_25</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar