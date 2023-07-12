import React from 'react'
import "./Online.css"

const Online = ({onlineuser}) => {
  return (
    <div className='online'>
        <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
                <img src={onlineuser.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{onlineuser.username}</span>
        </li>
    </div>
  )
}

export default Online