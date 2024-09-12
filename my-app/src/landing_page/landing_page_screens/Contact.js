import "../landing_page_styles/LandingPageContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { teddy } from "../../images/Teddy.png";
import { Button } from "flowbite-react";

function ContactCard(props) {
  return (
    <div className="mx-auto my-6 md:my-0 md:mx-16">
      <img className="w-48 h-48 rounded-lg" src={props.propic} loading="lazy" />
      <div className="text-left">
        <h4 className="font-bold text-xl">{props.name}</h4>
        <h5>{props.positionTitle}</h5>
        <div className="flex flex-row justify-start">
          <a className="" href={props.linkedinUrl}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="ml-4" href={"mailto:" + props.email}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="w-screen md:h-screen bg-white mb-20">
      <div className="pt-20 md:pt-10">
        <div className="text-black text-center justify-center">
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-5 md:mb-20  text-center font-medium lg:font-bold">
            Contact Us
          </div>
          <div className="flex flex-col mx-auto w-full md:flex-row justify-center">
            <ContactCard
              name={"Christy Lin"}
              propic={"../../images/Teddy.png"}
              positionTitle={"Designer"}
              linkedinUrl={"https://www.linkedin.com/in/christylin/"}
              email={"christylin33@berkeley.edu"}
            />
            {/* <p className="founder-description">As a Data Scientist / Software Engineer in Deloitte's Applied AI division, Natan loves building AI/ML projects and living on the cutting edge of NLP research. Natan received a Masters of Engineering in Computer Science from Cornell University, and enjoys watching soccer, playing board games, and jamming out on the guitar.</p> */}
            {/* <p className="founder-description">As a Software Engineer at Google with 3+ years of experience building backend APIs, Tommy loves exploring the depths of building full stack AI products to benefit humanity. Tommy received a Bachelors of Science in Computer Science from Washington University, and enjoys playing ping pong and relaxing at the beach.</p> */}
          </div>
          <h3 className={"mt-16 italic text-lg"}>
            {/* Artificial intelligence is a powerful technology that is taking the world by storm.

          If you'd like to join us on the battle of leveraging artificial intelligence for good,
          solving some of humanities most pressing problems, feel free to contact us. */}
            Feel free to schedule a coffee chat here.{" "}
          </h3>
          <Button
            onClick={() => {
              window.location.assign("https://calendly.com/christylin33/1-1-coffee-chat");
            }}
            class="mt-5 mb-12 md:my-5"
          >
            Schedule a Coffee Chat
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

