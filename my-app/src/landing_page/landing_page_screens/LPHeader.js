import React, { useState, useEffect, useRef } from "react";
import LP_HeaderImage from '../../images/LP_HeaderImage.png';




function LPHeader() {

  let currentWordIndex = 0

  const [inputValue, setInputValue] = useState('');
  const words = [ 'beautiful', 'transformative', 'novel', 'extraordinary'];
  const intervalDelay = 100;

  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth > 1024);
    };
    handleResize();
  }, []);

  useEffect(() => {
    let currentCharIndex = 0;
    let typingForward = true;

    const intervalId = setInterval(() => {
      setInputValue((prevValue) => {
        const currentWord = words[currentWordIndex];
        const currentChar = currentWord[currentCharIndex];

        if (typingForward) {
          // Typing forward
          if (currentChar === undefined) {
            // If at the end of the word, start deleting characters
            typingForward = false;
            return prevValue;
          }

          currentCharIndex++;
          return prevValue + currentChar;
        } else {
          // Deleting characters
          if (prevValue === '') {
            // Move to the next word after deleting all characters
            typingForward = true;
            currentWordIndex = (currentWordIndex + 1) % words.length;
          }

          return prevValue.slice(0, -1);
        }
      });
    }, intervalDelay);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentWordIndex]);


  const urlObject = new URL(window.location.origin);
  var hostname = urlObject.hostname;
  if (hostname.startsWith("www.")) {
    hostname = hostname.substring(4);
  }
  urlObject.hostname = `dashboard.${hostname}`;

  var startPath = urlObject.toString();
  return (
    <body>
      <div className="relative h-screen w-full">
      {isMediumScreen && (
        <div className="absolute top-0 right-0">
          <img
            src={LP_HeaderImage}
            alt="DashboardImg"
            className="cursor-pointer"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
          )}
          <div className="flex flex-col text-left pt-24 font-josefin-sans">
            <div className="text-3xl sm:text-4xl lg:text-4xl mb-2 px-24 py-w font-medium lg:font-medium mt-40">
              <p className="text-left">hello!</p>
            </div>

            <div className="text-5xl sm:text-5xl lg:text-7xl mb-1 px-24 py-2 font-medium lg:font-medium text-[#213A52]">
              i'm christy
            </div>

          </div>

        <div className="text-2xl sm:text-2xl lg:text-2xl mb-2 px-24 py-2 font-light lg:font-light">
            here to make things{' '}
            <span className='text-red-500 font-medium'>
             beautiful
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-start mb-2 px-24 py-2 text-center mt-10">
            <button
              type="button"
              className="text-[#213A52] border border-[#213A52] hover:text-black focus:outline-none shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer hover:bg-[#D7E5ED] hover:text-[##213A52]"
              onClick={() => {
                window.location.assign("https://calendly.com/christylin33/1-1-coffee-chat");
              }}
            >
              Let's Chat
            </button>
            </div>

          </div>

    </body>
  );
}


export default LPHeader;


