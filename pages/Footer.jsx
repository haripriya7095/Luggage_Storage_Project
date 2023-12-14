
//url to check the code
// route=/footer

import "../src/css_folder/footer.css"
import {FaFacebook,FaInstagram,FaTwitter,FaGooglePlus,FaYoutube,FaSnapchat} from "react-icons/fa"
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-page">

            <div className="company-details" style={{fontFamily:"sans-serif",fontWeight:400}}>
                <div className="about-company">
                    <h3>About Luggage Storage</h3>
                    <p>careers </p>
                    <p>social impact</p>
                    <p>afficilates</p>
                    <p>chain transparency</p>
                    <p>site map</p>
                    <p>global sites</p>

                </div>
                <div className="my-company">
                    <h3>My luggages</h3>
                    <p>order status  </p>
                    <p>beauty insider</p>
                    <p>reward bazaar</p>
                    <p>redeem points</p>
                    <p>subscibe now</p>
                    <p>unlimited shipping</p>

                </div>
                <div className="helps-and-faqs">
                    <h3>online ordering</h3>
                    <p>shipping   </p>
                    <p>billing</p>
                    <p>returns and exchanges</p>
                    <p>international shipments</p>
                    <p>customer service</p>
                    <p>contact us</p>

                </div>
                <div className="ways-to-use">
                    <h3>just arrived</h3>
                    <p>bestsellers</p>
                    <p>new offers</p>
                    <p>gift cards</p>
                    <p>store location</p>
                    <p>book a reservation</p>
                    <p>inside company</p>

                </div>
            </div>
            <hr/>
            <div className="newsletter">
                
                <div className="enter-for-newsletter">
                <label htmlFor="newsLetterEmail">Sign up for newsletter</label>

                    <div className="news-letter-container">
                    <input name="newsletterEmail" type="email" id="emailNewsLetter" placeholder="email"/>
                  
                    </div>
                </div>
                <div className="social-links">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaGooglePlus/>
                    <FaSnapchat/>
                    <FaYoutube/>

                </div>
            </div>
            <div className="copywrite">
                <p>copyright &#169; 2023</p>
                <p>All rights are reserved</p>
                <a style={{color:"white"}} href="#">terms of use</a>
                <a style={{color:"white"}} href="#">privacy policy</a>

            </div>
            
           

            </div>
        </div>
    )
}