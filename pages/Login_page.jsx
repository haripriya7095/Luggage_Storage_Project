import "../src/css_folder/login.css";
import LuggageSvg from "../src/assets/suitcase.svg"
import {FaEye,FaGoogle,FaFacebook} from "react-icons/fa"
import { Link } from "react-router-dom";
//url to check the code
// route=/loginpage
export default function Login_Page(){
    return(
        <div>
            <div className="login-layout-container">
                <div className="colored-layout">
                    <img className="colored-bg-img" src="../src/assets/luggage-imgLeft.png"alt="luggage-img" />
                </div>
                <div className="white-layout">
                    <img className="white-bg-img" src="../src/assets/suitcase.svg" alt="luggage-img"/>
                </div>
                <div className="login-form-container">
                    <div className="form-description">
                   <h2 className="greet-line">Welcome</h2>
                  <div>
                  <p style={{color:"gray",marginBottom:0}}>No Account?</p>
                <Link style={{textDecoration:"none"}} to="/register">  <p style={{color:"rgb(237,115,62)",fontWeight:600,marginTop:"3px",marginBottom:0}}>Sign IN</p>  </Link> 
                    </div>

                     
                        </div>


                   <h1 className="sign-in-line">Sign in</h1>
                  <form>
                   <div className="email-input-container">
                  <input type="email" className="email-input" name="loginEmail" placeholder="enter email or mobile number" />
                    
                    </div> 
                 <div className="password-input-container">
                 <input type="password" className="password-input" name="loginPass" placeholder="password" />
                 <FaEye className="eye-svg"/>
                 </div>
                 <div className="extra-pass-details">
                    <p className="remember-me"><input className="remember-me-input" type="checkbox" name="rememberMe"/><p >remember me</p> </p>
                    <p className="forgot-password-link">forgot password?</p>
                 </div>

                 <button className="login-submit-btn">Submit</button>
                  </form>
                  <p style={{textAlign:"center",color:"gray"}}>or</p>
                 
                  <button className="social-btns"><img src="../src/assets/google.png" style={{width:"30px",height:"30px"}}/> 
                   <p className="social-btn-text" > Sign in with Google</p></button>
                  <button className="social-btns"><img src="../src/assets/facebook.png" style={{width:"25px",height:"25px",marginLeft:"1.5rem"}}/> <p >Sign in with Facebook</p> </button>
                </div>
            </div>
           
        </div>
    )
}