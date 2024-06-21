// FooterSection.jsx 
import React from 'react';
import SocialLinks from  './SocialLinks';
import FooterLinks from  './FooterLinks';
import FooterCopyright from './FooterCopyright';
import Subscription from './Subscription'

const FooterSection = () => {
 return (
    <div className="flex flex-col items-center px-16 pt-5 pb-6  w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full" id="footer">
      <div className="flex flex-col mt-8 w-full max-w-[1131px] max-md:max-w-full">
        <div className="max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <SocialLinks />
            <FooterLinks />
            <Subscription /> 
          </div>
        </div>
        <FooterCopyright />
      </div>
    </div>
 );
};

export default FooterSection;

