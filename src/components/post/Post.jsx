import React from 'react'
import "./Post.css"
import { Users } from '../../data'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

  return (
    <div  className='post'>
        <div className="postWrapper">
            <div className="postTop"> 
            <div className="postTopLeft">
             <Link to = "/userId" >
                <img src= {Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
             </Link>
                <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <IconButton>
                    <MoreVertIcon className='postVertButton'/>
                </IconButton>
            </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.body}</span>
               <img src= {post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
               <FavoriteIcon className='bottomLeftIcon' style = {{color :"red"}}/>
               <ThumbUpIcon className='bottomLeftIcon' style = {{color:"blue"}} />
               <span className="postLikeCounter">{post.like}</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} ·comments ·share</span>
              </div>
            </div>
             <div className="postBottomRight"></div>
           
           <hr className='footerHr' />
           <div className="postBottomFooter">
            <div className="postBottomFooterItem">
            <ThumbUpOffAltIcon className='footerIcon'/>
            <span className="footerText">Like</span>
            </div>
            <div className="postBottomFooterItem">
            <ChatBubbleOutlineIcon className='footerIcon'/>
            <span className="footerText">Comment</span>
            </div>
            <div className="postBottomFooterItem">
            <ShareIcon className='footerIcon'/>
            <span className="footerText">Share</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Post;