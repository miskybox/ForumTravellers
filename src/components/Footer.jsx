//Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/App.css";

const Footer = () => {
  const handleSubscribeClick = (event) => {
    event.preventDefault();
    const emailInput = event.target.previousElementSibling.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("The subscription is correct!");
  };

  return (
    <footer className="footer background-custom">
      <div className="footer-left">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab"
          className="footer-logo"
        />
        <p className="footer-text">
          Copyright © 2024 - All right reserved by SiGu
        </p>
      </div>
      <form className="footer-center">
        <h6 className="footer-title">Newsletter</h6>
        {/*     <fieldset className="form-control w-100">  */}
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          <button
            onClick={handleSubscribeClick}
              className="input input-bordered join-item input-text-black"
          >
            Subscribe
          </button>
        </div>
        {/*    </fieldset>  */}
      </form>
      <div className="footer-right">
        <h4>Follow Us On</h4>
        <ul className="social-list">
          <li>
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <a href="#">Facebook</a>
          </li>
          <li>
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <a href="#">Twitter</a>
          </li>
          <li>
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
