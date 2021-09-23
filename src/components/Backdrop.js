import React from 'react';

const Backdrop = ({children, onClose}) => {
return (
    <section 
    className="relative w-full h-screen flex justify-center items-center cursor-pointer"
    style={{
        zIndex: 999,
        background: 'rgb(0 0 0 / 0.50)'
    }}
    onClick={onClose}
    >
        {children}
    </section>
)
}
export default Backdrop;