import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">SocioGram🐧</h3>
              <span className="loginDesc">
                Connect with friends and the world around you on SocioGram.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <div className="loginBottom">
                  <form className="loginBottomBox">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="loginInput"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      className="loginInput"
                      required
                    />
    
                    <button type="submit" className="loginBtn">
                      Sign In
                    </button>
                    <Link to="/register">
                      <button className="loginRegisterBtn">
                        Create a New Account
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

export default Login