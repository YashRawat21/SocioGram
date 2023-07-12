import React from 'react'
import { Link } from 'react-router-dom'
import "./ProfileRightBar.css"
const ProfileRightBar = () => {
  return (
    <div className='profileRightBar'>
        <div className="profileRightBarHeading">
             <span className="profileRightBarTitle">User Information</span>
             <Link to = "/edit" style = {{textDecoration : "none"}}>
             <span className="editButton">Edit Profile</span>
             </Link>
        </div>

        <div className="profileRightBarInfo">
          <div className="profileRightBarInfoItem">
            <span className="profileRightBarInfoKey">Email:</span>
            <span className="profileRightBarInfoValue">yashrawat@gmail.com</span>
          </div>
          <div className="profileRightBarInfoItem">
            <span className="profileRightBarInfoKey">Phone Number:</span>
            <span className="profileRightBarInfoValue"> 9990934223 </span>
          </div>  <div className="profileRightBarInfoItem">
            <span className="profileRightBarInfoKey">Address:</span>
            <span className="profileRightBarInfoValue">G.K , South Delhi</span>
          </div>  <div className="profileRightBarInfoItem">
            <span className="profileRightBarInfoKey">Country:</span>
            <span className="profileRightBarInfoValue">India</span>
          </div>
          <div className="profileRightBarInfoItem">
            <span className="profileRightBarInfoKey">Relationship:</span>
            <span className="profileRightBarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="profileRightBarTitle">Close Friends</h4>
        <div className="profileRightBarfollowings">
          <div className="profileRightBarfollowing">
            <img src="assets/friend1.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Janet</span>
          </div>
          <div className="profileRightBarfollowing">
            <img src="assets/friend2.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Isabella</span>
          </div>
          <div className="profileRightBarfollowing">
            <img src="assets/friend3.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Beverly</span>
          </div>
          <div className="profileRightBarfollowing">
            <img src="assets/friend4.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Glenna</span>
          </div>
          <div className="profileRightBarfollowing">
            <img src="assets/friend5.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Alexis</span>
          </div>
          <div className="profileRightBarfollowing">
            <img src="assets/friend6.jpg" alt="" className="profileRightBarfollowingImg" />
             <span className="profileRightBarfollowingName">Kate</span>
          </div>
        </div>
        
        
    </div>
  )
}

export default ProfileRightBar