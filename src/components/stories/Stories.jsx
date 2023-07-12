import React from 'react'
import "./Stories.css"
import StoryCard from '../storycard/StoryCard'
import {Users} from "../../data"
const Stories = () => {
  return (
    <div className='stories'>
       <div className="storyCard">
        <div className="overlay"></div>
        <img src="assets/Myimg2.jpg" alt="" className="storyProfile" />
        <img src="assets/Myimg2.jpg" alt="" className="storyBackground" />
        <img src="assets/upload.png" alt="" className="storyAdd" />
        
       </div>
       {
        Users.map((u) => (
            <StoryCard key = {u.id} user = {u}/>

        ))
       }
    </div>
  )
}

export default Stories