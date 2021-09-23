import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import Logo from "../assets/images/logo.png";

const Pinsetup = () => {
  return (
    <>
      <Background>
        <div className="container mx-auto signup">
        <img src={Logo} alt="Logo" className="signup-logo" />
          <form className="bg-transparent outer-form">
            <div className="bg-white shadow-md mx-auto px-5 pt-3 pb-6 w-full form-container">
              
              <div className="w-10/12 mx-auto">
                
                <div>
                  <p className="text-gray-500 text-sm">
                    create a pin to secure of your transanctions
                  </p>
                  <form className="inner-form w- my-1">
                    <input
                      type="text"
                      className="bg-gray-200"
                      placeholder="1"
                    />
                    <input
                      type="text"
                      className="bg-gray-200"
                      placeholder="2"
                    />
                    <input
                      type="text"
                      className="bg-gray-200"
                      placeholder="3"
                    />
                    <input
                      type="text"
                      className="bg-gray-200"
                      placeholder="4"
                    />
                  </form>
                </div>

                <div className="my-4 w-full">
                  <button className="py-2 px-6   block md:inline-block  rounded-full w-full text-sm next text-white">
                    Set  Pin
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Background>
    </>
  );
};

export default Pinsetup;
