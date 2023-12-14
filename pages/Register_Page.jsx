//url to check the code
// route=/registerpage
import "../src/css_folder/register.css"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register_Page(){
  
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        }
    return(
        <div className="register-container">
           <div className="colored-container">

 <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
      <div className='slide-img-container' style={{width:"500px",height:"700px",marginTop:"5rem"}}>
        
        <img style={{textAlign:"center"}} className='slide-img' src="../src/assets/C-signin1.png" alt="img-1"/>
       </div>
      
      </Carousel.Item>
      {/* <Carousel.Item interval={4000}>
        <div className='slide-img-container' style={{width:"500px",height:"900px",marginTop:"5rem"}}>
        <img style={{objectFit:"cover"}} className="slide-img" src="../src/assets/C-signin2.png" alt="img2" />

        </div>

      
      </Carousel.Item> */}
      <Carousel.Item interval={3000}>
      <div className='slide-img-container' style={{width:"500px",height:"700px",marginTop:"5rem"}}>

      <img style={{objectFit:"cover"}} className='slide-img' src="../src/assets/C-signin4.png" alt="img-3"/>
</div>
      
      </Carousel.Item>
      {/* <Carousel.Item interval={4000}>
        <div className='slide-img-container' style={{width:"500px",height:"700px",marginTop:"5rem"}}>
        <img style={{objectFit:"cover"}} className="slide-img" src="../src/assets/C-signin4.png" alt="img2" />

        </div>

      
      </Carousel.Item> */}
      <Carousel.Item interval={3000}>
      <div className='slide-img-container' style={{width:"500px",height:"700px",marginTop:"5rem"}}>

      <img style={{objectFit:"cover"}} className='slide-img' src="../src/assets/C-signin5.png" alt="img-3"/>
</div>
      
      </Carousel.Item>
      </Carousel>
           </div>
           <div className="white-container">
          
            <div className="register-page">
                <div className="register-main-title">
                    <h1>Create an Account</h1>
                    <div className="login-link-container">
                        <p className="login-ques">Already an account?</p>
                      <Link style={{textDecoration: "none"}} to="/login" >
                      <p className="login-link">login</p>
                      </Link> 
                    </div>
                </div>
                <div className="register-detail-container">
                <form className="register-details">
                    <div className="register-name-container">

                        <div className="first-name-container">

                             <div className="first-name-div">
                             <input type="text" name="firstName" id="firstName" placeholder="first name"/>

                             </div>

                        </div>
                        <div>
                           <div className="last-name-div">
                           <input type="text" name="lastName" id="lastName" placeholder="last name"/>

                           </div>

                        </div>
                    </div>
                    <div className="email-container">
                        <input  type="email" placeholder="email address"/>
                    </div>
                    <div className="mobile-container">
                        <input type="number" placeholder="mobile number"/>
                    </div>
                    <div>
                    <div className="password-container">
                        <input type="password" placeholder="password"/>

                    </div>
                    <p className="password-requirement">&#42; create a strong password of minimum 7 characters using atleast one uppercase one lowercase one special character and one digit</p>
                    </div>
                    
                   
                    <div className="confirm-password-container">
                        <input type="password" placeholder="confirm password"/>
                    </div>
                    <button className="register-btn">create account</button>
                </form>
                <p style={{textAlign:"center",color:"gray"}}>or</p>
                <button className="social-btns-register"><img src="../src/assets/google.png" style={{width:"30px",height:"30px"}}/> 
                   <p className="social-btn-text-register"> Sign in with Google</p></button>
                  <button className="social-btns-register"><img src="../src/assets/facebook.png" style={{width:"25px",height:"25px",marginLeft:"1.5rem"}}/> <p className="social-btn-text-register">Sign in with Facebook</p> </button>
                </div>
            </div>
            </div>
         
        </div>





    )
}