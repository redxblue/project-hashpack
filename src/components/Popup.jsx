import React, { useEffect } from "react";
import "./css/popup.css";
import { pairHashpack } from "./hashconnect";
import logo from "../assets/hashpack logo.png";

function Popup({ onClose, onPopupButtonClick,setPairingString,setAccountId,accountId,setLogin,login }) {
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

  // useEffect(()=>{
  //   accountId?setLogin(true):setLogin(false)
  // },[accountId])

  const connectWallet=async()=>{
    const initData = await pairHashpack();

    console.log(initData);
    setPairingString(initData.pairingString);
    console.log(initData.savedPairings[0])
    setAccountId(()=>initData.savedPairings[0]);        //<---------
    console.log(accountId);
    console.log("savedPairings",initData.savedPairings)

  }
  const disconnectWallet=()=>{
    console.log("disconnecting wallet")
    localStorage.clear();
  }
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Log In with a Wallet</h2>
        {accountId?  
        <button className="connect-wallet"
          onClick={disconnectWallet}>
          Log Out with Hashpack
        </button>
        :
        <button className="connect-wallet"
        onClick={connectWallet}>
        Log In with Hashpack
        </button>
        }
        {/* <button className="close-button" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
}

export default Popup;
