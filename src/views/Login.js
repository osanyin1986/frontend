import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import Logo from '../assets/images/logo.png';



const Login = () => {
   return (
      <Background>
         <div className="container mx-auto login">
            <form className="bg-transparent">
               <div className="bg-white shadow-md mx-auto px-5 pt-3 pb-6 w-full form-container">
                  <img src={Logo} alt="Logo" className="login-logo" />
                  <div className="w-10/12 mx-auto">
                     <div className="input-form bg-gray-200 w-full mx-auto flex flex-row items-center">
                        <button className="text-white mr-1"> + 234 </button>
                        <input
                           type="text"
                           placeholder="Enter Phone"
                           className="bg-transparent" />
                     </div>
                     <div className="input-form bg-gray-200 w-full mx-auto mt-5">
                        <input
                           type="text"
                           placeholder="Enter Password"
                           className="bg-transparent" />
                     </div>
                     <div className="flex flex-row justify-between items-center mt-4">
                        <div className="flex flex-row items-center">
                           <input type="checkbox" className="form-checkbox mr-1" />
                           <Link to="/signup">
                              Remember me
                           </Link>
                        </div>
                        <a>Opps! lost my password </a>
                     </div>
                     <div className="mt-8 w-full">

                        <button
                           className="py-2 px-6 text-white rounded-lg shadow-lg block md:inline-block  rounded-full w-full">Login</button>
                     </div>
                     <div className="text-center mt-5">
                        <Link to="/work">
                           Don't have an account?
                           <span className="font-bold mx-1">Sign Up</span>
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
   )

}

export default Login;