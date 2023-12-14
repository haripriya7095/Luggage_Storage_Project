import React from "react";
export default function Payment(){
    return(
        <div>
            <h1>Payment_page components</h1>
            <div className="bg-[#ffa583] w-[50vw] h-[100vh] flex justify-center ">
                <div className=" w-[40vw] h-[95vh] bg-white relative top-[2%] left-[50%] border rounded-[5%] shadow-md">
                    <h1 className="text-center pt-3 font-bold text-[20px] text-[#252f3d]">LUGGAGE STORAGE</h1>

                    <h2 className="text-center pt-1 text-lg text-[#252f3d]">Payment Page</h2>
                    <hr className="h-[1px] bg-[#c7d1de] mt-1"></hr>


                    <div className="w-[30vw] h-[75vh] shadow-lg shadow-[#c3bcb9] relative left-[12%] top-5 flex flex-col items-center pt-5">
                        <div className="text-[#ffa583] text-sm font-semibold">Identification Number</div>
                        <div className="w-[15vw] h-[4vh]  mt-3 shadow-md shadow-[#c3bcb9] text-[#252f3d] text-center">Random253&3-%6</div>
                        <div className="text-[#ffa583] text-sm font-semibold mt-3">Amount</div>
                        <div className="w-[15vw] h-[4vh]  mt-3 shadow-md shadow-[#c3bcb9] ext-[#252f3d] text-center">Rs. 2500</div>


                        <div className="relative top-5 py-4 px-3 w-[28vw] hover:bg-[#d6f7dc]">
                            <input type="radio" name="paymeth" value="upi" id="rad1"></input>
                            <label className="pl-3 font-semibold text-md cursor-pointer" htmlFor="rad1">Pay using UPI</label>

                            <div className="pl-6 pt-2 flex flex-col gap-3 text-sm">
                                <label>Please enter your UPI ID</label>
                                <div>
                                    <input type="text" placeholder="Enter UPI ID" className="border p-2 rounded-lg text-xs"></input>         
                                    <button className="ml-5 px-5 py-1.5 border rounded-lg bg-yellow-400">Verify</button>       
                                </div>           
                            </div>
                        </div>


                        <div className="relative top-5 py-4 px-3 w-[28vw] hover:bg-[#d6f7dc]">
                            <input type="radio" name="paymeth" value="onBank" id="rad3"></input>
                            <label className="pl-3 font-semibold text-md cursor-pointer" htmlFor="rad3">Online Banking</label>

                            <div className="pl-6 pt-2 flex gap-3">
                            <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" width={50} className="border rounded-full p-1 cursor-pointer"></img>
                            <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" width={50} className="border rounded-full p-1 cursor-pointer"></img>
                            <img src="https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png" width={50} className="border rounded-full p-1 cursor-pointer"></img>
                            <img src="https://www.financialexpress.com/wp-content/uploads/2023/01/bharatpe.jpg" width={70} className="border rounded-full p-1 cursor-pointer"></img>
                            </div>
                        </div>


                        <div className="relative top-5 py-4 px-3 w-[28vw] hover:bg-[#d6f7dc]">
                            <input type="radio" name="paymeth" value="card" id="rad2"></input>
                            <label className="pl-3 font-semibold text-md cursor-pointer" htmlFor="rad2">Credit or Debit card</label>

                            <div className="pl-6 pt-2 flex flex-wrap gap-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" width={40} className="border p-1 cursor-pointer"></img>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" width={40} className="border p-1 cursor-pointer"></img>
                                <img src="https://businessreviewlive.com/wp-content/uploads/2022/07/Untitled-design-min-47.png" width={40} className="border p-1 cursor-pointer"></img>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1200px-Maestro_logo.svg.png" width={40} className="border p-1 cursor-pointer"></img>                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>            
        </div>
    )
}