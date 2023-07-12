import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import "./EditProfile.css"
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const EditProfile = () => {
  return (
    <div className='editProfile'>
        <Navbar />
        <div className="editProfileWrapper">
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
            <div className="editprofileRightBottom">
                <div className="top"><h1 className='editProfileHeading'>Edit User Profile</h1></div>
                <div className="bottom">
                    <div className="left">
                        <img src = "assets/DefaultProfile.jpg" className='defaultImg' alt = ""/>
                    </div>
                    <div className="right">
                        <form>

                        <div className="formInput">
                            <label htmlFor='file'>
                                Image: <DriveFolderUploadIcon className='icon' />
                            </label>
                            <input type="file" id='file' style = {{display : "none"}}/>
                        </div>
                        <div className="formInput">
                            <label>Name</label>
                            <input type="text"  placeholder='Yash Rawat' className='editProfileInput'/>
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input type="text"  placeholder='Yash_Rawat' className='editProfileInput' />
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input type="text"  placeholder='yashrawat@gmail.com' className='editProfileInput' />
                        </div>
                        <div className="formInput">
                            <label>Phone</label>
                            <input type="text"  placeholder="9990934223" className='editProfileInput' />
                        </div>
                        <div className="formInput">
                            <label>Address</label>
                            <input type="text"  placeholder='G.K , South Delhi' className='editProfileInput' />
                        </div>
                        <div className="formInput">
                            <label>Country</label>
                            <input type="text"  placeholder='India' className='editProfileInput' />
                        </div>
                        <button type="submit" className='updateButton'>Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditProfile