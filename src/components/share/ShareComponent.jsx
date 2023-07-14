 import React, { useState } from 'react'
 import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
 import PhotoIcon from '@mui/icons-material/Photo';
 import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
 import "./Share.css"
 const ShareComponent = () => {
  const [file , setFile] = useState(null)
   return (
     <div className='share'>
        <div className="shareWrapper">
       <div className="shareTop">
        <img src="assets/Myimg2.jpg" alt="" className="shareProfileImg" />
        <input type="text" placeholder='what is on your mind ?' className='shareInput'/>
       </div>
       <hr className="shareHr"/>
        {file && <div className='shareImgContainer'> 
          <img  src = {URL.createObjectURL(file)} alt = "" className='shareImg' />
         </div>
         }
       <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <VideoCameraFrontIcon className = "shareIcon" style = {{color : "#bb0000f2"}} />
            <span className="shareOptionText">Live Video</span>
          </div>
           < label htmlFor='file' className="shareOption">
            <PhotoIcon className = "shareIcon"  style = {{color: "#2e0196f1"}} />
            <span className="shareOptionText">Photo/Video</span>
          <input type='file' id='file' accept='.png , .jpeg, .jpg' style={{display : "none"}} 
           onChange={(e) => setFile(e.target.files[0])}
          />
          </label>
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