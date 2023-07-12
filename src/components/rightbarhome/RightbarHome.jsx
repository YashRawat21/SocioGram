import React from 'react'
import "./RightbarHome.css"
import Online from '../online/Online'
import { Usersonline } from '../../data'
const RightbarHome = () => {
  return (
    <div className='rightbarhome'>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="BirthdayText">
           <b> Sarah Dane </b>and <b>other friends</b> have a birthday today</span>
         </div>
         <img src="assets/adv.jpg" alt="" className="rightbarAdvert" />
       <span className="rightbarTitle">Online Friends</span>
          
     <ul className="rightbarFriendList">
        {Usersonline.map((u) => {
            
       return     <Online key = {u.id} onlineuser = {u}/>
            
            
        })} 
     </ul>
    </div>
  )
}

export default RightbarHome