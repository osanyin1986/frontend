import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import Logo from '../assets/images/logo.png';



const creatpassword = () => {
   return (
      <Background>
         <div className="container mx-auto createpassword">
            <form className="bg-transparent">
               <div className="bg-white shadow-md mx-auto px-5 pt-3 pb-6 w-full form-container">
                  <img src={Logo} alt="Logo" className="login-logo" />
                  <div className="w-10/12 mx-auto">
                     
                     
                     <div className="input-form bg-gray-200 w-full mx-auto mt-5">
                        <input
                           type="text"
                           placeholder="Create Password"
                           className="bg-transparent" />
                     </div>

                     <div className="input-form bg-gray-200 w-full mx-auto mt-5">
                        <input
                           type="text"
                           placeholder="Confirm Password"
                           className="bg-transparent" />
                     </div>
                     
                     <div className="mt-8 w-full">

                        <Link to="/Pinsetup"> 
                        <button
                           className="py-2 px-6 text-white rounded-lg shadow-lg block md:inline-block  rounded-full w-full">Sign Up</button>
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
   )

}

export default creatpassword;