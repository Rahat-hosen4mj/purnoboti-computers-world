import React from "react";
import person from '../../assets/portFolioImg/person-1.png'

const PortfolioBanner = () => {
  return (
    <section className="text-gray-900 bg-gray-200 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/5 mx-auto">
         
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-48 h-48 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <div className="52 rounded-xl">
                  <img src={person} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Rahat hosen
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                “Life and death is natures law. All living beings are equal, and everyone has their right to survive and be killed. There might be royalty and lower beings, but in face of death, a persons death is no different from a pig's, what's the difference? Theyre both dead”
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
              I've been an avid Linux user for the past few years, and I do not think that's going to change any time soon.

Dabbling in different languages is a hobby of mine, Typescript is my go-to choice in most cases, but I can improvise a Python, Rust, and Go developer in dire need.

I use Git and GitHub for version control, although I've tried to use GitLab in the past.

Whilst I have some conflicting opinions on VSCode, I'm pretty sure I'm going to use it for a while longer.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
