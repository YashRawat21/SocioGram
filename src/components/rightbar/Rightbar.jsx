import React from 'react'
import "./Rightbar.css"
import RightbarHome from '../rightbarhome/RightbarHome';
import ProfileRightBar from '../profileRightBar/ProfileRightBar';
const Rightbar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ?<ProfileRightBar />:<RightbarHome />}
      </div>
    </div>
  )
}

export default Rightbar;