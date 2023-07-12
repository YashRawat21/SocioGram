import React from 'react'
import "./Register.css"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from 'react-router-dom';

export const Register = () => {

return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SocioGram🐧</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SocioGram.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <div className="registerTop">
              <img
                src="/assets/DefaultProfile.jpg"
                alt=""
                className="registerProfileImg"
              />
              <div className="registerFormInput">
                <label htmlFor="file" className='registerLabel'>
                  Image: <DriveFolderUploadIcon className="registerIcon" />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
            <div className="registerBottom">
              <form className="registerBottomBox">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="registerInput"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="registerInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="registerInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPasword"
                  className="registerInput"
                  required
                />
                <button type="submit" className="registerButton">
                  Sign Up
                </button>
                 <Link to="/login">
                  <button className="loginRegisterButton">
                    Log into Account
                  </button>
                </Link> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
