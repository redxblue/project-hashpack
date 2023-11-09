import React, { useEffect } from "react";
import "./css/popup.css";
import { pairHashpack } from "./hashconnect";
import logo from "../assets/hashpack logo.png";

function Popup({ onClose, onPopupButtonClick }) {
  useEffect(() => {
    // Add event listener to close the popup when clicking outside
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("popup-container")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Log In with a Wallet</h2>
        <button
          className="connect-wallet"
          onClick={async () => {
            const initData = await pairHashpack();

            console.log(initData);
            setPairingString(initData.pairingString);
            setAccountId(accountId);
            console.log(accountId);
            setLogin(true);

            // Display an alert for successful login
            window.alert("Login was successful");
          }}
        >
          {/* <img className="button-image" src={logo} alt="Company Logo" /> */}
          Log In with Hashpack
        </button>
        {/* <button className="close-button" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
}

export default Popup;
