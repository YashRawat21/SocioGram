 import React from 'react'
 import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
 import PhotoIcon from '@mui/icons-material/Photo';
 import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
 import "./Share.css"
 const ShareComponent = () => {
   return (
     <div className='share'>
        <div className="shareWrapper">
       <div className="shareTop">
        <img src="assets/Myimg2.jpg" alt="" className="shareProfileImg" />
        <input type="text" placeholder='what is on your mind ?' className='shareInput'/>
       </div>
       <hr className="shareHr"/>
       <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <VideoCameraFrontIcon className = "shareIcon" style = {{color : "#bb0000f2"}} />
            <span className="shareOptionText">Live Video</span>
          </div>
           <div className="shareOption">
            <PhotoIcon className = "shareIcon"  style = {{color: "#2e0196f1"}} />
            <span className="shareOptionText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon className = "shareIcon" style =  {{color:"#bfc600ec"}} />
            <span className="shareOptionText">Feelings/Activity</span>
          </div> 
        </div>
       </div>
       </div>
     </div>
   )
 }
 
 export default ShareComponent