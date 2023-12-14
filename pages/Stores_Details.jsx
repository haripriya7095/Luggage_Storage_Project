//url to check the code
// route=/storageLuggage
import { useState } from 'react'
import '../src/css_folder/Stores_Details.css'
import image1 from '../src/assets/schließfächer-gepäckaufbewahrung_dpa.jpg'
//import image2 from '../src/assets/airport-guide-cloak-room.jpg'
import image3 from '../src/assets/Libby-GARAGE-7.jpg'
import image4 from '../src/assets/14.jpg'
import { IoIosStarOutline } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";
import { TiPin } from "react-icons/ti";
import { RiShareForwardFill } from "react-icons/ri";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiDotOutlineFill } from "react-icons/pi";
import { PiThumbsUpLight } from "react-icons/pi";
import { BsChatRightDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
//import lugimg from '../src/assets/images.jpeg';
import lugimg2 from '../src/assets/eyJidWNrZXQiOiJ0ZWFrYW5kdHdpbmUtYXNzZXRzIiwia2V5IjoiaW1hZ2VzXC80Nzk3Nlwvc3dhZy1naWYuZ2lmIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NTAsImhlaWdodCI6OD.gif'
import pgif from '../src/assets/shelves.gif'

export default function Storage_Luggage() {
    const [activeTab, setActiveTab] = useState(1);

    //For Luggages
    const [size, setSize] = useState("Small");
    const [luggages, setLuggages] = useState('');
    const [time, setTime] = useState("10.30 - 11.00");
    const [price, setPrice] = useState('');

    //For Products 
    const [pluggages, setpLuggages] = useState('');
    const [ptime, setpTime] = useState("10.30 - 11.00");
    const [pprice, setpPrice] = useState('');

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);

    };
    const offsetTabs = [30, 215, 395, 567];
    const TimeStamps = ['7:00 - 7:30', '7:30 - 8:00', '8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30', '9:30 - 10:00',
        '10:30 - 11:00', '11:30 - 12:00', '12:30 - 1:00', '3:00 - 3:30', '3:30 - 4:00', '4:00 - 4:30',
        '4:30 - 5:00', '5:30 - 6:00', '6:30 - 7:00', '7:30 - 8:00'
    ]
    return (
        <div className='lcontainer'>
            <div className="images  h-[67vh]">
                <div className='zoom-img'>
                    <img src={image1} alt="" />
                </div>
                <div className='images2'>
                    <div className='zoom-img1'>
                        <img src={image4} alt="" className='' />
                    </div>
                    <div className='zoom-img1 mt-[10px] '>
                        <img src={image3} alt="" className='' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center my-4'>
                <h1 className='text-4xl '>Luggage Store - Since 2003</h1>
                <div className='flex gap-4 '>
                    <div className='flex items-center gap-[10px] reviews'>
                        <div><button className='text-[18px] flex items-center gap-[5px] py-[7px] px-[8px] font-medium  border rounded-xl text-white'>3.6  <IoIosStarOutline /></button></div>
                        <div>
                            <p className='text-sm'>14</p>
                            <p className='text-sm'>Storage Reviews</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] reviews'>
                        <div><button className='text-[18px] flex items-center bg-[#ffa583] gap-[5px] py-[7px] px-[8px] font-medium  border rounded-xl text-white'>4.2 <IoIosStarOutline /></button></div>
                        <div>
                            <p className='text-sm'>3,899</p>
                            <p className='text-sm'>Service Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[5px]'>
                <p className='py-[3px]'>We Store Bags,Jewellery,Machinery Parts etc..</p>
                <p className='py-[3px] text-gray-600'>Nampally,Hyderabad</p>
                <p className='py-[3px]'><span className='text-[#ffa583]'>Opening hours </span> -  7am - 12:30pm </p>
            </div>
            <div className='flex items-center gap-2 py-[5px] '>
                <button className=' text-[18px] flex items-center gap-2 border border-[#ffa583] hover:bg-gray-100 rounded-lg px-4 py-2'>
                    <VscGitCompare />
                    <h2>Directions</h2>
                </button>
                <button className=' text-[18px] flex items-center gap-2 border border-[#ffa583] hover:bg-gray-100 rounded-lg px-4 py-2'>
                    <TiPin />
                    <h2>Pin</h2>
                </button>
                <button className=' text-[18px] flex items-center gap-2 border border-[#ffa583] hover:bg-gray-100 rounded-lg px-4 py-2'>
                    <RiShareForwardFill />
                    <h2>Share</h2>
                </button>
            </div>
            {/* Swithing Tabs */}
            <div className="tabs-container mt-4">
                <div className="tab-buttons">
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active transition duration-500 ease-in-out' : ''}>
                        <h1 className='text-2xl '>Luggages</h1>
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active transition duration-500 ease-in-out' : ''}>
                        <h1 className='text-2xl '>Products</h1>
                    </button>
                    <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active transition duration-500 ease-in-out' : ''}>
                        <h1 className='text-2xl '>Reviews</h1>
                    </button>
                    <button onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active transition duration-500 ease-in-out' : ''}>
                        <h1 className='text-2xl '>Location</h1>
                    </button>
                    <div className='line' style={{ left: `${offsetTabs[activeTab - 1]}px` }}></div>
                </div>
                <div className='tab-content py-8'>
                    {activeTab == 1 &&
                        <div className='flex justify-around'>
                            <div>
                                <h1 className='text-3xl font-medium'>Store Your Luggage Here...</h1>
                                <p className='py-2 text-[15px] text-[#ffa583]'>Enter the details of your Luggage to proceed...</p>
                                <div className='flex py-2 space-x-24'>
                                    <div>
                                        <h1 className='text-2xl'>Choose the Size:</h1>
                                        <div className='my-4'>
                                            <select id='size' name='size' value={size} onChange={(e) => setSize(e.target.value)}
                                                className='w-[200px] px-14 py-[3px] cursor-pointer'>
                                                <option value='Small'>Small</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-2xl'>No.of Luggages:</h1>
                                        <div className='my-4'>
                                            <select id='number' name='number' value={luggages} onChange={(e) => setLuggages(parseInt(e.target.value))}
                                                className='w-[100px] px-8 py-[3px] cursor-pointer'>
                                                {[...Array(16).keys()].map((number) => (
                                                    <option key={number} value={number}>{number}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex py-2 space-x-24 items-center'>
                                    <h1 className='text-2xl'>Time:</h1>
                                    <select id='time' className='w-[150px] px-[10px]' name='time'
                                        value={time} onChange={(e) => setTime(e.target.value)}>
                                        {TimeStamps.map((time) => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='py-2 flex items-center space-x-24 '>
                                    <h1 className='text-2xl'>Price:</h1>
                                    <input type='text' placeholder='ex.450' value={price} onChange={(e) => setPrice(parseInt(e.target.value))} className=' p-2 border border-slate-600 rounded-lg' />
                                </div>
                                <div className='flex mt-10 items-center space-x-4'>
                                    <button className='bg-[#ffa583] p-[12px] transform duration-300 hover:translate-x-[10px] cursor-pointer border rounded-lg'>Click to Continue</button>
                                    <p>OR</p>
                                    <button
                                        onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active bg-[#ffa583] p-[12px] transform duration-300 hover:translate-x-[10px] cursor-pointer border rounded-lg' : 'bg-[#ffa583] p-[12px] transform duration-300 hover:translate-x-[10px] cursor-pointer border rounded-lg'}
                                    >Move to Products</button>
                                </div>
                            </div>
                            <div>
                                <img src={lugimg2} className='w-[500px] border rounded-[24px]' alt="" />
                            </div>
                        </div>
                    }
                    {activeTab == 2 &&
                        <div className='flex justify-around'>
                            <div>
                                <h1 className='text-3xl font-medium py-2'>Products Storage</h1>
                                <p className='py-2 text-[15px] text-[#ffa583]'>We can store your products also...</p>
                                <div>
                                    <div className='flex items-center py-4 space-x-6'>
                                        <h1 className='text-2xl py-2'>No.of items:</h1>
                                        <select id='number' name='number' value={pluggages} onChange={(e) => setpLuggages(parseInt(e.target.value))}
                                            className='w-[100px] px-8 py-[3px] cursor-pointer'>
                                            {[...Array(16).keys()].map((number) => (
                                                <option key={number} value={number}>{number}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='flex py-2 space-x-24 items-center'>
                                        <h1 className='text-2xl'>Time:</h1>
                                        <select id='time' className='w-[150px] px-[10px]' name='time'
                                            value={ptime} onChange={(e) => setpTime(e.target.value)}>
                                            {TimeStamps.map((time) => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='py-2 flex items-center space-x-24 '>
                                        <h1 className='text-2xl'>Price:</h1>
                                        <input type='text' placeholder='ex.450' value={pprice} onChange={(e) => setpPrice(parseInt(e.target.value))} className=' p-2 border border-slate-600 rounded-lg' />
                                    </div>
                                    <div className='my-4'>
                                        <button className='bg-[#ffa583] p-[12px] transform duration-300 hover:translate-x-[10px] cursor-pointer border rounded-lg'>Continue to the Payment</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={pgif} className='w-[500px] border rounded-[25px]' alt="" />
                            </div>
                        </div>
                    }
                    {activeTab == 3 &&
                        <div>
                            <h1 className='text-3xl'>Luggage Store - Since 2003 Reviews</h1>
                            <div className='text-gray-500 py-4 border-b border-gray-400'>
                                <div className='flex items-center space-x-2 py-2'>
                                    <BiSolidUserCircle size={36} />
                                    <div>
                                        <p>Abhay Mishra</p>
                                        <div className='flex items-center text-[13px]'>
                                            <p>0 reviews </p>
                                            <PiDotOutlineFill size={20} />
                                            <p>0 Followers </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 pt-2'>
                                    <div className='flex items-center space-x-2 py-[3px]'>
                                        <button className='px-2 py-[3px] flex border rounded-lg items-center bg-green-600 text-white'>
                                            <p>5</p>
                                            <IoIosStarOutline />
                                        </button>
                                        <p className='text-black'>DELIVERY</p>
                                        <p>2 hours ago</p>
                                    </div>
                                    <div className='text-gray-700 py-[3px]'>Best Service</div>
                                    <div className='text-[15px] py-[3px]'>0 Votes for helpful,0 Comments</div>
                                </div>
                                <div className='flex space-x-4 p-2'>
                                    <button className='flex items-center space-x-2'>
                                        <PiThumbsUpLight />
                                        <p>Helpful</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <BsChatRightDots />
                                        <p>Comment</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <FaShare />
                                        <p>Comment</p>
                                    </button>
                                </div>
                            </div>
                            <div className='text-gray-500 py-4 border-b border-gray-400'>
                                <div className='flex items-center space-x-2 py-2'>
                                    <BiSolidUserCircle size={36} />
                                    <div>
                                        <p>Neema Deshwal</p>
                                        <div className='flex items-center text-[13px]'>
                                            <p>11 reviews </p>
                                            <PiDotOutlineFill size={20} />
                                            <p>12 Followers </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 pt-2'>
                                    <div className='flex items-center space-x-2 py-[3px]'>
                                        <button className='px-2 py-[3px] flex border rounded-lg items-center bg-green-600 text-white'>
                                            <p>5</p>
                                            <IoIosStarOutline />
                                        </button>
                                        <p className='text-black'>DELIVERY</p>
                                        <p>2 hours ago</p>
                                    </div>
                                    <div className='text-gray-700 py-[3px]'>Best Storage</div>
                                    <div className='text-[15px] py-[3px]'>2 Votes for helpful,0 Comments</div>
                                </div>
                                <div className='flex space-x-4 p-2'>
                                    <button className='flex items-center space-x-2'>
                                        <PiThumbsUpLight />
                                        <p>Helpful</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <BsChatRightDots />
                                        <p>Comment</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <FaShare />
                                        <p>Comment</p>
                                    </button>
                                </div>
                            </div>
                            <div className='text-gray-500 py-4 border-b border-gray-400'>
                                <div className='flex items-center space-x-2 py-2'>
                                    <BiSolidUserCircle size={36} />
                                    <div>
                                        <p>Abhinav Varma</p>
                                        <div className='flex items-center text-[13px]'>
                                            <p>20 reviews </p>
                                            <PiDotOutlineFill size={20} />
                                            <p>50 Followers </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 pt-2'>
                                    <div className='flex items-center space-x-2 py-[3px]'>
                                        <button className='px-2 py-[3px] flex border rounded-lg items-center bg-green-600 text-white'>
                                            <p>5</p>
                                            <IoIosStarOutline />
                                        </button>
                                        <p className='text-black'>DELIVERY</p>
                                        <p>2 hours ago</p>
                                    </div>
                                    <div className='text-gray-700 py-[3px]'>Service People are friendly</div>
                                    <div className='text-[15px] py-[3px]'>7 Votes for helpful,0 Comments</div>
                                </div>
                                <div className='flex space-x-4 p-2'>
                                    <button className='flex items-center space-x-2'>
                                        <PiThumbsUpLight />
                                        <p>Helpful</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <BsChatRightDots />
                                        <p>Comment</p>
                                    </button>
                                    <button className='flex items-center space-x-2'>
                                        <FaShare />
                                        <p>Comment</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    {activeTab == 4 &&
                        <div>
                            <h1 className='text-3xl'>Luggage Store - Since 2003</h1>
                            <div className='grid grid-cols-2 space-x-[70px] my-8 relative'>
                                <div className=''>
                                    <div>
                                        <p className='py-[5px] text-[20px]'>Known For</p>
                                        <p className='py-[5px] text-[#ffa583]  text-[24px]'>A very Perfect Place for Luggage Storage </p>
                                    </div>
                                    <div>
                                        <p className='first-para py-2'>Discover the ultimate travel convenience with our state-of-the-art luggage storage service! Revolutionizing the way you explore new destinations</p>
                                        <p className='py-2 first-para '><b className='text-xl'>🌍 Explore Unburdened:</b> Say goodbye to the hassle of dragging your luggage around. We have storage units near transportation hubs, tourist hotspots, and commercial areas.</p>
                                        <p className='py-2 first-para '><b className='text-xl'>🔐 Secure and Reliable:</b> Rest easy knowing your belongings are in safe hands. Our facilities are equipped with  security measures, including surveillance cameras, secure locking mechanisms.</p>
                                        <p className='py-2 first-para '><b className='text-xl'>⏰ Travel on Your Terms:</b> Whether you have an early check-out, a late flight, or simply want to enjoy the city unencumbered, our service gives you the flexibility to drop off and pick up your luggage at your convenience.</p>
                                        <p className='py-2 first-para '><b className='text-xl'>💼 Flexible Itineraries:</b> Embrace the freedom of flexible travel itineraries. We cater to the modern traveler, offering a reliable solution for storing luggage after checking out from accommodations, especially in the era of Airbnb and shared spaces.</p>
                                    </div>
                                    <p className='p-8 text-2xl'>Your peace of mind is our priority 😊.</p>
                                </div>
                                <div>
                                    <section className=''>
                                        <div className='box '>
                                            <h3 className='text-xl py-2'>Call</h3>
                                            <div className='py-[5px]'>
                                                <p className='text-[#ffa583]'>+914023317571</p>
                                                <p className='text-[#ffa583]'>+914023318567</p>
                                            </div>
                                            <div className='map'>
                                                <h3 className='text-xl py-[5px]'>Direction</h3>
                                                <div className='py-2'>
                                                    <img
                                                        src="https://maps.zomato.com/php/staticmap?center=16.4968652987,80.6640246883&amp;maptype=zomato&amp;markers=16.4968652987,80.6640246883,pin_res32&amp;sensor=false&amp;scale=2&amp;zoom=16&amp;language=en&amp;size=500x250"
                                                        loading="lazy"
                                                        alt="Map"
                                                    />
                                                </div>
                                                <p className="address py-[5px]">11-6-467, Nampally Market, Nampally, Hyderabad</p>
                                                <div>
                                                    <a href="https://www.google.com/maps/dir/?api=1&amp;destination=16.4968652987,80.6640246883" target="_blank" rel="noopener noreferrer">
                                                        <button className='flex items-center gap-2'>
                                                            <VscGitCompare />
                                                            <h1>Directions</h1>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}