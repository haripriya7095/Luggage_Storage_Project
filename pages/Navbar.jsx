import "../src/css_folder/navbar.css"
//url to check the code
// route=/navbar
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import cityData from "../src/city"
import {FaMapMarkerAlt,FaCaretDown,FaCaretUp,FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function Navbar(){


    const[openGps,setOpenGps]=React.useState(false)
    const[search,setSearch]=React.useState(false)
    
    React.useEffect(()=>{
        const body=document.querySelector("body")

        if(search){
            // body.style.filter="brightness(0)"
            body.style.filter="grayScale(0.5)"


           
          


        }
        else{
            body.style.filter="grayScale(0)"
        }
    },[search])

    return(
        <div className="navbar-container">
            <div className="navbar-center">
                <img src="../src/assets/logo.png" alt="" className="logo-icon"/>
                <div className="input-container">
                    <div className="gps-container">
                        <FaMapMarkerAlt className="map-marker-svg"/>
                        <input onClick={()=>setOpenGps(true)} style={{color:"#6a6a6a",fontSize:"1.1rem",outline:"none",border:0,background:"transparent"}} placeholder="Mumbai"/>
                        <div  className="caret-svg" onClick={()=>setOpenGps((prevVal)=>!prevVal)} >
                         {openGps?<FaCaretDown className="caret-down"/>:<FaCaretUp className="caret-up"/>}
                         </div>
                       <div className={openGps?"show-gps-container open-gps-container":"open-gps-container"}>
                        <div className="gps-btn">
                        <FaLocationCrosshairs style={{width:"25px",height:"25px",color:"#F8858B"}}/>
                        <p style={{color:"#F8858B",fontSize:"1.1rem"}}>Detect current location</p>
                        </div>
                       
                        <p className="gps-text">Using Gps</p>
                       </div>
                        
                        
                    </div>
                    
                    <div className="divider"></div>
                    <div className="search-city-container">
                        <CiSearch className="search-svg"/>
                        <form>
                            <input onClick={()=>setSearch(true)} className="search-city" name="cityName" placeholder="Search for luggage store house"/>
                        </form>
                        <div className={`city-list-container ${search && "show-city-container"}`}>
                            <div className="city-input">
                            <input type="text" placeholder="search for your city" name="citySearchName" />

                            </div>
                            <p style={{textAlign:"center",margin:"1rem auto",marginTop:"2rem"}}>Popular cities</p>
                            <div className="city-list">
                            {
                            cityData.map((city)=>{
                                const{id,name,img}=city
                                return(
                                    <div className="single-city-details" key={id}>
                                        <img src={img} alt="city-image"/>

                                        <p>{name}</p>

                                        </div>
                                )
                            })
                        }

                            </div>
                       
                        <p style={{textAlign:"center",color:"rgb(247, 122, 122)",marginTop:"2rem"}}>View all cities</p>
                    </div>
                    </div>
                   
                   
                </div>
                <div style={{marginLeft:"20%",display:"flex",gap:"2rem"}}>
                    <Link to="/login">
                <div className="avatar-icon">
                        <img src="https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg" alt="avatar-icon" />
                    </div>
                    </Link>
                    <button className="store-list-btn">Store list</button>
            </div>  
                </div>
               
           
        
        </div>
    )
}