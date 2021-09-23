import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import Logo from '../assets/images/logo.png';
import Backdrop from '../components/Backdrop';

const SignUp = () => {
   const [showOtp, setShowOtp] = useState(false);

   const handleShowOTP = () => {
      setShowOtp(true)
   }

   const handleCloseOTP = () => {
      setShowOtp(false)
   }

   return (
      <>
      { showOtp && (
      <Backdrop onClose={handleCloseOTP}>
         <div className="bg-white shadow-md  rounded-md w-11/12 md:w-80 h-60 p-5">
            <div className="relative">
               <button
               className="text-xl mt-2 font-bold text-right inline-block w-full hover:opacity-80 text-green-500"
               onClick={handleCloseOTP}> 	&#10005; </button>
               <h3 className="text-lg">What is OTP?</h3>
               <p className="text-sm break-words mt-5">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
               <br /><br />
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               </p>
            </div>
         </div>
      </Backdrop>
      )}
         <Background>
            <div className="container mx-auto signup">
               <form className="bg-transparent outer-form">
                  <div className="bg-white shadow-md mx-auto px-5 pt-3 pb-6 w-full form-container">
                     <img src={Logo} alt="Logo" className="signup-logo" />
                     <div className="w-10/12 mx-auto">
                        <div className="input-form bg-gray-200 w-full mx-auto flex flex-row items-center">
                           <button className="text-white mr-1 code"> + 234 </button>
                           <input
                              type="text"
                              placeholder="Enter Phone"
                              className="bg-transparent" />
                        </div>
                        <div className="my-6 w-full">

                           <button
                              className="py-2 px-6 block md:inline-block  rounded-full w-full text-sm otp">Send OTP</button>
                        </div>
                        <div>
                           <p className="text-gray-500 text-sm">Enter received OTP verification code</p>
                           <form className="inner-form w-full my-2">
                              <input type="text" className="bg-gray-200" />
                              <input type="text" className="bg-gray-200" />
                              <input type="text" className="bg-gray-200" />
                              <input type="text" className="bg-gray-200" />
                              <input type="text" className="bg-gray-200" />
                              <input type="text" className="bg-gray-200" />
                           </form>
                        </div>

                        <div className="text-right mt-3">
                           <button 
                           type="button"
                           className="otp-button"
                              onClick={handleShowOTP}
                           >
                              What is OTP?
                           </button>

                        </div>

                        <div className="my-4 w-full">
                        <Link to ="/Next"><button
                        className="py-2 px-6   block md:inline-block  rounded-full w-full text-sm next text-white">Next</button></Link>
                           
                        </div>
                        <div className="text-center mt-5">
                           <Link to="/login">
                              Already have an account?
                              <span className="font-bold mx-1">Log in</span>
                              <span className="font-bold"> &rarr;</span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center footer py-4 px-2">
                     <Link to="/tc">
                        Terms & Condition
                     </Link>
                     <Link to="/privacy">
                        Privacy Policy
                     </Link>
                  </div>
               </form>
            </div>
         </Background>
      </>
   )

}


export default SignUp;