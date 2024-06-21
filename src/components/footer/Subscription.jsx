//Subscription.jsx
import React, { useState } from "react";

const ForumSubscription = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubscribe = () => {
    if (isValidEmail) {
      alert("Thanks for subscribing!");
      // Aquí puedes agregar la lógica para manejar la suscripción
    }
  };

  return (
    <>
      <div>
        <h4>Improve your travel experience with our best tips</h4>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          disabled={!isValidEmail}
          onClick={handleSubscribe}
          style={{
            backgroundColor: isValidEmail ? "green" : "gray",
            color: "white",
          }}
        >
          To subscribe
        </button>
        s
      </div>
    </>
  );
};

export default ForumSubscription;
