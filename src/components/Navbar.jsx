import React, { useEffect } from "react";
import { useState } from "react";
import "./css/navbar.css";
import logo from "../assets/logo.png";
import { appMetadata, hashconnect } from "./hashconnect";
import Popup from "./Popup";

function Navbar() {
  const [pairingString, setPairingString] = useState();
  const [accountId, setAccountId] = useState();
  const [login, setLogin] = useState(false);
  //const [hashconnect, setHashconnect] = useState(hashconnect);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  useEffect(() => {
    // console.log("Login state changed: ", login);
    // // Your login logic here
    console.log("in first navbar useEffect");
    let data = localStorage.getItem("hashconnectData");
    if (data) {
      data = JSON.parse(data);
      console.log(data?.pairingData[0]?.accountIds[0]);
      data = data?.pairingData[0]?.accountIds[0]; //current account ID
      const storedAccountId = data;
      setAccountId(storedAccountId);
      // const accountId = document.getElementById("accountid");
      // accountId.innerHTML = data;                //to get wallet address displayed on page refresh
      // if(data){                                  //to get logout displayed
      // const logoutButton=document.getElementById("logoutbutton");
      // logoutButton.textContent="log out"
      // }
    }
  }, []);
  ////////////////////////////////////////////////////////////////

  const pairHashpack = async () => {
    hashconnect.setupEvents();
    console.log("inside pairHaspack function");
    //setUpHashConnectEvents()
    //console.log(hashconnect); //@
    let initData = await hashconnect.init(appMetadata, "testnet", false);
    console.log(`this is initData returned by pairHashpack fn${initData}`);

    hashconnect.foundExtensionEvent.once((walletMetadata) => {
      hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
    });

    hashconnect.pairingEvent.once((pairingData) => {
      console.log("wallet paired");
      console.log(pairingData);
      setAccountId(pairingData.accountIds[0]);
      //console.log(hashconnect); //@
      console.log(hashconnect.hcData.pairedData);
    });

    return initData;
  };

  ////////////////////////////////////////////////////////////////
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <img src={logo} alt="Company Logo" />
        <ul className="nav no-search">
          <li className="nav-item">
            <p id="accountid">{accountId}</p>
          </li>

          <li className="nav-item">
            <button
              id="logoutbutton"
              className="logout-button"
              onClick={handlePopupOpen}
            >
              {accountId ? "Log out" : "Log In"}
            </button>
          </li>
        </ul>
      </nav>

      {isPopupOpen && (
        <Popup
          onClose={handlePopupClose}
          setPairingString={setPairingString}
          setAccountId={setAccountId}
          accountId={accountId}
          setLogin={setLogin}
          login={login}
          pairHashpack={pairHashpack}
          hashconnect={hashconnect}
        />
      )}
    </div>
  );
}

export default Navbar;
