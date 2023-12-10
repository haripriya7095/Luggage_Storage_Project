import { useState } from 'react';
import './Navbar';
import '../src/css_folder/delivery_luggage.css';
import logo1 from '../src/assets/how-works1.3096370.png'
import logo2 from '../src/assets/how-works2.f798377.png'
import logo3 from '../src/assets/how-works3.1faa3af.png'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaAnglesRight } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";

export default function Delivery() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pickupLocation, setPickupLocation] = useState('');
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const [price, setprice] = useState('');

    const [smallLuggage, setSmallLuggage] = useState(0);
    const [mediumLuggage, setMediumLuggage] = useState(0);
    const [largeLuggage, setLargeLuggage] = useState(0);

    const [termsChecked, setTermsChecked] = useState(false);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleSubmit = () => {
        setPickupLocation('')
        setDeliveryLocation('')
        setprice('')
        setSmallLuggage(0);
        setMediumLuggage(0);
        setLargeLuggage(0);
        setTermsChecked(false);
    };
    return (
        <div className="largecontainer">
            <div className="row1">
                <div className='bigcol'>
                    <div className="lcol">
                        <h1 className='sm:text-xl md:text-2xl  main-heading'>Get your shipment picked up from your <b>doorstep</b></h1>
                        <p>Send your parcel from the comfort of your home or office</p>
                    </div>
                    <div className="rcol">
                        <div className="container">
                            <div className='form-outer'>
                                <form action="" className='flex'>
                                    {currentPage === 1 && (
                                        <div className="page transform transition-transform ease-in-out duration-300 relative">
                                            <div className='path'>
                                                <BiDotsVerticalRounded />
                                                <BiDotsVerticalRounded />
                                                <BiDotsVerticalRounded />
                                                <BiDotsVerticalRounded />
                                            </div>
                                            <div className="title flex items-center gap-4 pl-[20px] py-4 ">
                                                <FaShippingFast size={32} />
                                                <h1 className='text-2xl'><b>Ship</b> my Courier</h1>
                                            </div>
                                            <div className="field flex items-center">
                                                <FaRegCircle size={24} className='text-gray-700 ' />
                                                <input
                                                    type="text"
                                                    className=' p-4 mx-4 mr-[15px] my-[20px] w-[100%] border rounded-lg'
                                                    placeholder='Enter Pick up Location'
                                                    value={pickupLocation}
                                                    onChange={(e) => setPickupLocation(e.target.value)}
                                                />
                                            </div>
                                            <div className="field flex items-center">
                                                <IoLocationOutline size={24} />
                                                <input
                                                    type="text"
                                                    className=' p-4 mx-4 my-[20px] w-[100%] border rounded-lg'
                                                    placeholder='Enter Delivery Location'
                                                    value={deliveryLocation}
                                                    onChange={(e) => setDeliveryLocation(e.target.value)}
                                                />
                                            </div>
                                            <div className="field">
                                                <button onClick={nextPage} className="firstNext   bg-[#ffa583] mt-2 w-[90%] mx-auto  py-2 text-xl rounded-lg cursor-pointer transition duration-300 hover:scale-105">Next</button>
                                            </div>
                                        </div>
                                    )}
                                    {currentPage === 2 && (
                                        <div className="page transform transition-transform ease-in-out duration-300 relative">
                                            <BiSolidSpreadsheet className='absolute right-0 top-[4px]' id='details-icon' size={32} />
                                            <div className="title pl-[20px]  text-2xl">
                                                <h1><b>Details</b> of my Courier</h1>
                                            </div>
                                            <div className="field flex flex-col">
                                                <h2 className='text-xl py-2 px-[22px]'>Types of Luggages:</h2>
                                                <div className='flex items-center justify-between gap-8 mx-4 px-4 mb-[20px] w-[100%]'>
                                                    <div className=''>
                                                        <h2 className='text-gray-600 mb-[5px]'>Small</h2>
                                                        <select name="small" id="small" value={smallLuggage} onChange={(e) => setSmallLuggage(parseInt(e.target.value))}>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-gray-600 mb-[5px]'>Medium</h2>
                                                        <select name="medium" id="medium" value={mediumLuggage} onChange={(e) => setMediumLuggage(parseInt(e.target.value))}>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <h2 className='text-gray-600 mb-[5px]'>Large</h2>
                                                        <select name="large" id="large" value={largeLuggage} onChange={(e) => setLargeLuggage(parseInt(e.target.value))}>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field flex flex-col">
                                                <label className='px-6 text-xl' htmlFor="">Price :</label>
                                                <input
                                                    type="text"
                                                    className=' p-4 mx-4 my-[10px] w-[100%] border rounded-lg'
                                                    placeholder='Ex:450'
                                                    value={price}
                                                    onChange={(e) => setprice(e.target.value)}
                                                />
                                            </div>
                                            <div className='mx-4 mb-[5px] p-2 flex items-center gap-2'>
                                                <FaAnglesRight className='text-gray-700' />
                                                <p className='text-gray-500'>We will deliver in 2-3 days</p>
                                            </div>
                                            <div className="field flex space-x-4 mb-2">
                                                <button onClick={prevPage} className="PrevOne ml-[20px]  bg-[#ffa583] w-[50%] py-2 rounded-lg cursor-pointer transition duration-300 hover:scale-105">Back</button>
                                                <button onClick={nextPage} className="SecNext ml-[20px]  bg-[#ffa583] w-[50%] py-2 rounded-lg cursor-pointer transition duration-300 hover:scale-105">Next</button>
                                            </div>
                                        </div>
                                    )}
                                    {currentPage === 3 && (
                                        <div className="page">
                                            <IoNewspaperOutline className='mx-auto' size={30} />
                                            <div className="title flex items-center gap-2 pl-[20px] text-center py-4 text-xl">
                                                <div className='bg-[#ffa583] w-[50px] h-[3px]'></div>
                                                <b>Terms</b> and <b>Conditions</b>
                                                <div className='bg-[#ffa583] w-[50px] h-[3px]'></div>
                                            </div>
                                            <div className=' flex gap-3 relative'>
                                                <input type='checkbox' className='' checked={termsChecked}
                                                    onChange={() => setTermsChecked(!termsChecked)} />
                                                <p className='text-sm py-2'> I acknowledged and confirmed that i have read all of the terms of this Policy and our Website’s Terms and Conditions.</p>
                                            </div>
                                            <div className=' flex gap-3 relative'>
                                                <input type='checkbox' className='' checked={termsChecked}
                                                    onChange={() => setTermsChecked(!termsChecked)} />
                                                <p className='text-sm py-2'>I understand, accept and agree to be bound by all the provisions contained in this Policy and the Terms and Conditions as contained on our Website</p>
                                            </div>
                                            <div className="field flex space-x-4 py-4">
                                                <button onClick={prevPage} className="PrevOne ml-[20px]  bg-[#ffa583] w-[50%] py-2 rounded-lg cursor-pointer transition duration-300 hover:scale-105">Back</button>
                                                <button onClick={handleSubmit}
                                                    className={`SecNext ml-[20px] w-[50%] py-2 bg-[dodgerblue] flex items-center justify-center gap-2  rounded-lg cursor-pointer transition duration-300 hover:scale-105 ${!termsChecked ? 'disabled' : ''}`}
                                                    disabled={!termsChecked}>
                                                    <p className='text-white text-[17px]'>Ship now </p>
                                                    <FaAnglesRight className='' />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2 w-full bg-[#ececec]  mx-auto">
                <div className='p-20 mx-10 heading'>
                    <h1 className='text-3xl'>How it Works</h1>
                </div>
                <div className='cards max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='card mx-auto px-4'>
                        <img src={logo1} alt="" className='sm:w-full' />
                        <div className='card-body'>
                            <div className='card-heading py-2 sm:text-xl md:text-2xl text-4xl'>
                                <b>Schedule</b> a free pickup
                            </div>
                            <div className='card-content py-4 sm:text-[15px]'>
                                <p>Get doorstep pickup for parcels from your location. Book couriers for yourself or your loved ones online from our website or app</p>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto px-4 '>
                        <img src={logo2} className='sm:w-full ' alt="" />
                        <div className='card-body'>
                            <div className='card-heading py-2 sm:text-xl md:text-2xl text-4xl'>
                                We arrive at your <b>doorstep</b>
                            </div>
                            <div className='card-content py-4 sm:text-[15px]'>
                                <p>Our partners reach your location within 24 hours of placing the order.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto px-4'>
                        <img src={logo3} className='sm:w-full' alt="" />
                        <div className='card-body'>
                            <div className='card-heading py-2 sm:text-xl md:text-2xl text-4xl'>
                                Sit back and <b>relax</b>
                            </div>
                            <div className='card-content py-4 sm:text-[15px]'>
                                <p>Your order will be delivered to the chosen destination. Track it from our website or app</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}