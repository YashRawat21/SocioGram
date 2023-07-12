import React from 'react'
import "./Feed.css"
import Stories from '../stories/Stories'
import ShareComponent from '../share/ShareComponent'
import Post from '../post/Post'
import { Posts } from '../../data'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Stories />
         <ShareComponent/>
          {Posts.map((p) => 
         <Post key = {p.id} post = {p}/>
          )}
      </div>
    </div>
  )
}

export default Feed