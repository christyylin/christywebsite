import React from 'react';
import Upreach from '../../images/upreach.gif';
import Laptop from '../../images/Laptop.png';
import Lightmode from '../../images/Lightmode.gif';



function LPFeature() {
    return (

        <div className="bg-[#EAEEF3] mt-[20px] mb-[20px] relative p-20">
            <h3 className="text-center text-2xl md:text-4xl font-medium mb-12 text-[#213A52]">
                featured project
            </h3>
        <div style={{ margin: '70px'}}></div>
        <div className="flex items-center mt-4 relative">



            <div className="ml-5 z-15 relative">
                <h3 className="text-4xl font-medium text-left text-[#213A52] ml-[50px] pl-20">upreach.ai</h3>
                <div className="container ml-50 max-w-[40rem]">
                    <p className ="text-medium font-medium ml-[0px] text-left text-black mr-120 pl-20 pr-20 pt-6">
                    Upreach is an AI-powered platform that upon the input of a one-line command, whether it be a keyword or natural language query, can precisely search for thousands of leads and generate specifically tailored emails to send to millions of people.
                    </p>
                </div>
                <button
                        type="button"
                        className="ml-[125px] mt-[20px] text-[#213A52] border border-[#213A52] hover:bg-[#213A52] hover:text-black focus:outline-none shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer hover:bg-[#D7E5ED] hover:text-[##213A52]"
                        onClick={() => {
                            window.location.assign("https://upreach.ai");
                          }}
                    >
                        View Product
                    </button>
            </div>


            <img
                src={Lightmode}
                alt="DashboardImg"
                className="cursor-pointer shadow-lg rounded-lg absolute z-10 relative"
                style={{ width: '40%', height: 'auto', marginLeft:'60px', zIndex:'10' }}
            />






        </div>
    </div>

    );
}

export default LPFeature;