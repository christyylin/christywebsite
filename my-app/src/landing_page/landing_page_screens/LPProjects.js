
import React from 'react';
import MementoMori from '../../images/MementoMori.png';
import Snapchat from '../../images/Snapchat.png';
import Nwsltr from '../../images/Nwsltr.ai.png';
import Miro from '../../images/Miro.png';
import ProjectComponent from './ProjectComponent';

//const LPProjects = () => {
    //const navigate = useNavigate();

    //const handleButtonClick = () => {
      //navigate('/projects');
    //};

function LPProjects() {
    return (
    <div className="bg-[#F2f2f2] mt - [-20px]">
        <div style={{ margin: '60px'}}>
        <h2 className="text-center text-2xl md:text-4xl font-medium mb-12 text-[#213A52]"> other recent work</h2>
            <div className= "mx-4 flex justify-center items-center space-x-7">
                    <ProjectComponent
                        imageSource={MementoMori}
                        title= "Memento Mori"
                        description= "Product Design | UI/UX"
                    />
                <ProjectComponent
                    imageSource={Snapchat}
                    title= "Snapchat"
                    description= "Global Brand Experience Intern"
                />
            </div>

            <div className= "mx-4 flex justify-center items-center space-x-7">
                <ProjectComponent
                    imageSource={Miro}
                    title= "Miro"
                    description= "Product Design"
                />

                <ProjectComponent
                    imageSource={Nwsltr}
                    title= "Nwsltr.ai"
                    description= "Product Design"
                    onClick={() => {
                        window.location.assign("https://nwsltr.ai");
                      }}
                />
            </div>

        </div>
    </div>

  );
};
// };
export default LPProjects;
