import "../src/css_folder/homeNav.css"
import {NavLink,Link} from "react-router-dom"
import React from "react"
export default function HomeNav(){

    const[isActive,setIsActive]=React.useState(false)
 

    return(
        <div className="home-nav-outer">
        
        <div  className="home-nav-container">
            <NavLink to="/" style={{textDecoration:"none"}} 
            className={({isActive})=>isActive?"activeLink":"notActive"}
            >
            
            <div  className="nav nav-one">
              <img className="nav-img" src="../src/assets/luggageLogo.png" alt="img"/>
            <p  className={`${isActive&&"activeLink"}`}>Storage</p>
            {/* <hr className="divider-one"/> */}
            </div>
            </NavLink>
            <NavLink to="/delivery" style={{textDecoration:"none"}}
            className={({isActive})=>isActive?"activeLink ":"notActive"}
            >
            <div className="nav nav-two">
            <img  src="../src/assets/courier11.png" alt="img"/>

                                    
            <p >Delivery</p>
            {/* <hr className="divider-two"/> */}

            </div>
            </NavLink>
            
          
        </div>
        <div className="nav-show"></div>
          <div className="nav-divider"></div>
</div>
    )
}