import React from 'react';
import Teddy from '../../images/Teddy.png';
import { useNavigate } from 'react-router-dom';


const LPAboutme = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      // Use the navigate function to navigate to the About page
      navigate('/about'); // Replace '/about' with the actual path of your About page
    };
  


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
                    <div>

                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="text-[#213A52] border border-[#213A52] hover:bg-[#213A52] hover:text-black focus:outline-none shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 ml-20 mt-10 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer hover:bg-[#D7E5ED] hover:text-[##213A52]"
                >
                    Read more
                </button>
                </div>

                </div>
              </div>
            </div> 
             
            
        </div>
    );
}

export default LPAboutme;
