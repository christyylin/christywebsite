import LPHeader from "./LPHeader";
import LPTestimonials from "./LPTestimonials";

function Home(props) {
  return (
    <div className="bg-[#1A191A] text-white flex flex-col justify-center">
      <LPHeader props={props}></LPHeader>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-auto"></hr>
      <LPTestimonials></LPTestimonials>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-auto"></hr>
      {/* <LPGetStarted></LPGetStarted> */}
    </div>
  );
}

export default Home;
