// FooterLinks.jsx
import React from 'react';

const FooterLinks = () => {
 return (
    <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
      <div className="max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-xl font-semibold leading-8 uppercase text-stone-500 max-md:mt-10">
                        <p>
                          <span className="text-base">About Us</span>
                        </p>
                        <p>
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-xl font-semibold leading-8 uppercase text-stone-500 max-md:mt-10">
                        <p>
                          <span className="text-base text-stone-500">
                            Contact
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-xl font-semibold leading-8 text-left uppercase text-stone-500 max-md:mt-10">
                        <p>
                          <span className="text-base">Partners</span>
                        </p>
                        <p>
                          <br />
                        </p>
                      </div>
                    </div>
        </div>
      </div>
    </div>
 );
};

export default FooterLinks;
