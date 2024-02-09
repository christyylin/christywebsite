import React from 'react';
import Coffee from '../../images/Coffee.png';


function LPEnd() {
    return (
        <div className="bg-[#F2f2f2] flex flex-col mt-20 mb-40 justify-center items-center">
            <h3 className="text-4xl font-medium text-left text-[#213A52]">thanks for scrolling :)
            </h3>

            <p className ="text-xl font-medium text-left text-black pt-5">
                you made it this far...
            </p>

            <p className ="text-xl font-medium text-left text-black pt-5">
                so we should grab coffee
            </p>

            <img 
            src={Coffee}
            className="w-20 mt-10 h-auto ml-[-40px]"
            >
            </img>

            <h3 className ="text-xl font-medium text-left text-[#4C80A8] pt-5 mt-10">
                © Christy Lin Made with React, Designed in Figma
            </h3>
        
        </div>
    )
}

export default LPEnd;