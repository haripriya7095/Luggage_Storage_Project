import "../src/css_folder/StorageD.css";
import {FaStar}  from "react-icons/fa"
// import "../src/css_folder/HomeLayout.css"
import storageData from "../src/storageData";
import { Link } from "react-router-dom";

//url to check the code
// route=/

export default function Storage() {
    return (
        <div>
            <section className="storage-container">
                 {
                     storageData.map((store)=>{
                        const{id,name,reviews,image,details,address}=store

                        return(
                            <Link style={{textDecoration:"none"}} to="/singlestore/:id">
                            <div key={id} className="single-store">
                                <img src={image} alt="store image"/>
                                <div className="single-store-info">
                                    <div className="main-store-info">
                                        <h2>{name}</h2>
                                        <p>{reviews} <FaStar style={{display:"inline"}} /></p>
                                    </div>
                                    <p className="single-store-detail" >{details}</p>
                                    <p className="single-store-address">{address}</p>
                                </div>
                            </div>
                            </Link>
                        )
                     })
                 }

               
            </section>
        </div>



    )
}