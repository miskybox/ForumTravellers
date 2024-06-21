// SocialLinks.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {
 return (
    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-xl font-medium text-teal-500 uppercase max-md:mt-10">
        <div>
          <p>
            <span className="text-base">Follow us on</span>
          </p>
        </div>
    {/* Agrega enlaces a tus redes sociales */}
    <ul style={{ listStyleType: "none" }}>
          <li>
            {" "}
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <a href="#">Facebook</a>
          </li>

          <li>
            {" "}
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <a href="#">Twitter</a>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
 );
};

export default SocialLinks;
