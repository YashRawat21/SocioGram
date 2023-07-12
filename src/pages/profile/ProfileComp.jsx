import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./Profile.css"
// import {profileCover} from 
const ProfileComp = () => {
  return (
    <div className='profile'>
     <Navbar />
     <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/profilecover.jpg" alt="" className="profileCoverImg" />
                 <img src="assets/Myimg2.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileNameInfo">Yash Rawat</h4>
                    <span className="profileInfoDesc">Hi Friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile />
            </div>
        </div>
     </div>
    </div>
  )
}

export default ProfileComp