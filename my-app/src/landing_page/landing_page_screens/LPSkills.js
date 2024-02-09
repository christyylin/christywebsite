import React from 'react';
import Skills from '../../images/Skills.png';

function LPSkills() {
    return (
        <div className="bg-[#F2f2f2] flex flex-col mt-20 mb-40 justify-center items-center">
            <h3 className="text-4xl font-medium text-left text-[#213A52]">places i've worked
            </h3>
        

            <img 
            src={Skills}
            style={{ width: '40%', height: 'auto', margin: '40px' }}
            >
            </img>

            <p className ="text-xl font-medium text-left text-black pt-5">
                ... along with some amazing early stage startups
            </p>
        </div>
    )
}

export default LPSkills;