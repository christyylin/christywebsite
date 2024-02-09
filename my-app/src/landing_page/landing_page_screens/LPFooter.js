import React from 'react';
import Footerpic from '../../images/Footerpic.png';
import Status from '../../images/Status.png';

function LPFooter() {
    return (
        <div className="bg-white py-20 m-0">
            <hr className="w-full border-t mt-[-80px] border-[#213A52]" />
            <div className="flex items-center mt-4">
              <img
                src={Footerpic}
                alt="DashboardImg"
                className="cursor-pointer"
                style={{ width: '5%', height: 'auto', marginBottom: '120px', marginLeft: '100px', marginRight: '20px' }}
              />

              <div className="ml-2">
                <div className= "ml-[-150px]">
                    <h3 className ="text-[24px] font-bold text-left text-black mt-10 pl-40">
                    Christy Lin
                    </h3>
                <div className = "flex items-center">
                    <p className ="text-[18 px] font-medium text-left text-black pl-40 mb-40">
                    Current Status:                
                    </p>
                    <img
                        src={Status}
                        alt="DashboardImg"
                        className="cursor-pointer"
                        style={{ width: '25%', height: 'auto', marginBottom: '160px', marginLeft: '10px'}}
                    />
                <div/>
            <div className="flex flex-col mt-[100px] ml-[-380px]">
                <p className ="text-[18px] font-medium text-left text-black pl-40 ml-[-110px] mt-2">
                reading <b>A Little Life</b>
                </p>
                <p className ="text-[18px]font-medium text-left text-black pl-40 ml-[-110px] mt-2">
                watching <b>Fleabag</b>
                </p>
                <p className ="text-[18px]font-medium text-left text-black pl-40 ml-[-110px] mt-2">
                listening <b>Pilt Chamberlain</b>
                </p>
            </div>

                </div>
              </div>
            </div> 
             
            
            </div>
        </div>
    );
}

export default LPFooter;