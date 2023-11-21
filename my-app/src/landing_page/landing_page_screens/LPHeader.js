import React, { useState, useEffect, useRef } from "react";

function LPHeader() {

  const [inputValue, setInputValue] = useState('');
  const words = ['One keyword', 'Millions of leads', 'Tailored to your goals'];
  const intervalDelay = 100;

  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth > 1024);
    };
    handleResize();
  }, []);

  useEffect(() => {
    let currentWordIndex = 0;
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

          return prevValue + currentChar;
        } else {
          // Deleting characters
          return prevValue.slice(0, -1);
        }
      });

      if (typingForward) {
        currentCharIndex++;
      } else {
        currentCharIndex--;
      }

      // if (words.length - 1 === currentWordIndex && currentCharIndex === words[words.length - 1].length) {
      //   clearInterval(intervalId)
      // }

      if (currentCharIndex < 0) {
        // Move to the next word after deleting
        typingForward = true;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentCharIndex = 0;
      }
    }, intervalDelay);

    return () => clearInterval(intervalId); // Cleanup on component unmount

  }, []);
  const urlObject = new URL(window.location.origin);
  var hostname = urlObject.hostname;
  if (hostname.startsWith("www.")) {
    hostname = hostname.substring(4);
  }
  urlObject.hostname = `dashboard.${hostname}`;

  var startPath = urlObject.toString();
  return (
    <div className="bg-[#1A191A] text-white max-w-screen">
      <div className="flex flex-col h-3/5 pt-24 md:h-screen LP-Header relative">
        {isMediumScreen && (
          <div
            className="absolute top-2/3 left-0 transform -translate-y-1/2 flex justify-center w-1/4 sm:top-1/2 md:top-1/2">
            <img
              src="/landing_page_assets/headerImg/headerFlightImg.png"
              alt="DashboardImg"
              className="lg:cursor-pointer h-full block"
            />
          </div>
        )}
        <div className="flex flex-col text-center pt-24">
          <div className="text-3xl sm:text-4xl lg:text-6xl mb-4 font-medium lg:font-bold">
            AI-Powered Leads.
          </div>
          <div className="text-3xl sm:text-4xl lg:text-6xl mb-4 font-medium lg:font-bold">
            Effortless Outreach.
          </div>
          <div className="min-h-10 w-full flex justify-center">
            <div className=" h-full w-full md:w-1/3 ">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative ml-6 mr-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="text-lg font-bold block w-full p-4 ps-10 text-white border border-gray-300 rounded-lg bg-[#282E35] focus:ring-[#4F66EE] focus:border-[#4F66EE]" value={inputValue} autoFocus readOnly />
                <button class="text-white absolute end-2.5 bottom-2.5 bg-[#4F66EE] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-[#4F66EE]">Search</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button type="button" class="text-white bg-[#4F66EE] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer hover:bg-blue-500"
              onClick={() => {
                window.location.assign(startPath);
              }}
            >
              Get Started
            </button>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                window.location.assign("https://calendly.com/natanvidra/anote");
              }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
        <div
          className="mt-auto h-1/5 md:h-2/5 w-full flex justify-center">
          <img
            src="/landing_page_assets/headerImg/headerDashboardImg.png"
            alt="HeaderImg"
            className="lg:cursor-pointer md:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LPHeader;
