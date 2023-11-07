import React from "react";
import "./css/popup.css";
import { pairHashpack } from "./hashconnect";

function Popup({ onClose, onPopupButtonClick }) {
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
          }}
        >
          Log In with Hashpack
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
