import React from 'react';


const Background = ({children}) => {
return (
    <section className="absolute w-full top-0 h-screen background">
    <div className="background-bg top-0 absolute h-screen w-full">
        {children}
    </div>
    </section>
)
}
export default Background;