import LPHeader from "./LPHeader";
import LPTestimonials from "./LPTestimonials";
import LPAboutme from "./LPAboutme";
import LPProjects from "./LPProjects";
import LPSkills from "./LPSkills";
import LPEnd from "./LPEnd";
import LPFeature from "./LPFeature";
import LPFooter from "./LPFooter";
import CustomCursor from "./Cursor";



function Home(props) {
  return (
    <div className="bg-[#F2F2F2] text-[#213A52]">

      <div className="bg-[#F2F2F2] text-white flex flex-col justify-center">
        <LPHeader props={props}></LPHeader>
        <hr class=" bg-gray-200 border-0 dark:bg-gray-700 mx-auto"></hr>
        {/* <LPAboutme />
        <hr class=" bg-[#F2f2f2] border-0 dark:bg-gray-700 mx-auto"></hr> */}
        <LPSkills />
        <hr class=" bg-[#F2f2f2] border-0 dark:bg-gray-700 mx-auto"></hr>
        <LPFeature/>
        <hr class="h-px my-8 bg-[#C9E1F4] border-0 dark:bg-gray-700 mx-auto"></hr>
        <LPProjects />
        <hr class="h-px my-8 bg-[#F2f2f2] border-0 dark:bg-gray-700 mx-auto"></hr>
        <LPTestimonials />
        <hr class="h-px my-8 bg-[#F2f2f2] border-0 dark:bg-gray-700 mx-auto"></hr>
        <LPEnd />
        <hr class="h-px my-8 bg-[#F2f2f2] border-0 dark:bg-gray-700 mx-auto"></hr>
        <LPFooter />
        <hr class="h-px bg-white border-0 dark:bg-gray-700 mx-auto"></hr>
        {/* <LPGetStarted></LPGetStarted> */}
      </div>
    </div>
  );
}

export default Home;
