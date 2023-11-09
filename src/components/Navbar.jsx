import React, { useEffect } from "react";
import { useState } from "react";
import "./css/navbar.css";
import logo from "../assets/logo.png";
import { pairHashpack } from "./hashconnect";
import Popup from "./Popup";

function Navbar() {
  const [pairingString, setPairingString] = useState();
  const [accountId, setAccountId] = useState();
  const [login, setlogin] = useState(true);

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
  }, [login]);

  // Check for stored account ID on page load
  useEffect(() => {
    const storedAccountId = localStorage.getItem("accountId");
    if (storedAccountId) {
      setAccountId(storedAccountId);
      setLogin(true);
    }
  }, [login]);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <img src={logo} alt="Company Logo" />
        <ul className="nav no-search">
          {/* <li className="nav-item">
            <a href="#">Home</a>
          </li>

          <li className="nav-item">
            <a href="#">About</a>
          </li> */}

          <li className="nav-item">
            {
              // onClick={async () => {
              //   const initData = await pairHashpack();
              //   console.log(initData);
              //   setPairingString(initData.pairingString);
              //   setAccountId(accountId);
              //   console.log(accountId);
              // }
            }

            <p id="accountid">{accountId}</p>
          </li>

          {login ? (
            <li className="nav-item">
              <button className="temp2" onClick={handlePopupOpen}>
                Log In
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <button className="temp2" onClick={handlePopupOpen}>
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>

      {isPopupOpen && (
        <Popup
          onClose={handlePopupClose}
          setPairingString={setPairingString}
          setAccountId={setAccountId}
          setLogin={setlogin}
        />
      )}
    </div>
  );
}

export default Navbar;
