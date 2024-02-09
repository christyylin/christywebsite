import React from 'react';
import Teddy from '../../images/Teddy.png';

function About() {
    return (
        <div className="bg-[#F2f2f2] mt - [-20px]">
            <div style={{ margin: '20px'}}></div>
            <div className="flex items-center mt-4">
              <img
                src={Teddy}
                alt="DashboardImg"
                className="cursor-pointer"
                style={{ width: '55%', height: 'auto', marginLeft: '12px' }}
              />

              <div className="ml-3">
                <h3 className="text-4xl font-medium text-left text-[#213A52] ml-[-150px] pl-20">about me</h3>
                <div className="container ml-[-150px] w-15">
                    <p className ="text-xl font-medium text-left text-black mr-40 pl-20 pt-5">
                    Hi there! I’m Christy and I recently graduated from UC Berkeley Haas School of Business.
                    </p>
                    <p className ="text-xl font-medium text-left text-black mr-40 pl-20 pt-5">
                    I’m currently a product manager and product designer based in New York City & have done projects for companies such as: Mastercard, Snapchat, Miro, Tower28, and a variety of early-stage startups. I love working with engineers & designers to turn revolutionary ideas into impactful products.
                    </p>

                </div>
              </div>
            </div> 
             
            
        </div>
    );
}

export default About;
