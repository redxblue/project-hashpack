import React, { useState } from "react";
import "./css/home.css";

function Home() {
  const [pairingString, setPairingString] = useState();
  const [accountId, setAccountId] = useState();

  // Define a function to handle the button click
  function handleButtonClick() {
    window.location.href = "https://hedera.com/";
  }

  return (
    <section className="hero-section">
      <div className="content">
        <h2 className="abouthedera">About Hedera</h2>
        <p>
          Hedera (HBAR) is a cryptocurrency that works on Hashgraph, a type of
          blockchain. The Hedera Hashgraph is responsible for Cryptos, smart
          contracts, and distributed apps.
        </p>
        <button onClick={handleButtonClick}>Know More</button>
      </div>
    </section>
  );
}

export default Home;
