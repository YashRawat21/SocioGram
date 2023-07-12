import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link} from "react-router-dom"
import  "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className="navbarLeft">
          <Link to ="/" style={{textDecoration : "none"}}>
         <span className="logo">SocioGram🐧</span>
          </Link>
            
        </div>
        <div className="navbarCenter">
            <div className="searchBar">
            <SearchIcon className='searchIcon'/>
            <input type='text' placeholder='Search for friends post or video' className='searchInput' />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
              <Link to= "/" style = {{textDecoration : "none" , color : "white"}} >
                <span className='navbarLink'>Homepage</span>
              </Link>
                <span className='navbarLink'>TimeLine</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconsItem">
                <PersonIcon />
                <span className='navbarIconBadge'>2</span>
                </div>
                <div className="navbarIconsItem">
                <ChatBubbleIcon/>
                <span className='navbarIconBadge'>10</span>
                </div>  <div className="navbarIconsItem">
                <NotificationsActiveIcon />
                <span className='navbarIconBadge'>2</span>
                </div>
            </div>
            <Link to = "/userId">
          <img src = " assets/MyImg2.jpg" alt = "" className='navbarImg' />
            </Link>
        </div>
    </div>
     
    )
}

export default Navbar