import React, { useState } from "react";
import "./css/home.css";

function home() {
  const [pairingString, setPairingString] = useState();
  const [accountId, setAccountId] = useState();

  return (
    <>
      <div className="content-wrapper">
        <h1 id="bodyhead">About Hedera</h1>
        <p id="bodypara">
          This text is styled with some of the text formatting properties. The
          heading uses the text-align, text-transform, and color properties. The
          paragraph is indented, aligned, and the space between characters is
          specified. The underline is removed from this colored
          <a target="_blank" href="tryit.asp?filename=trycss_text">
            "Try it Yourself"
          </a>{" "}
          link.
        </p>
        <img
          src="https://icodrops.com/wp-content/uploads/2017/11/Hedera-Hashgraph-logo.jpg"
          alt="Logo"
          id="imageId"
        />
        <p id="bodypara1">
          Hedera Hashgraph is an emerging and innovative distributed ledger
          technology (DLT) that has generated considerable excitement and
          interest in the blockchain and cryptocurrency space. It offers several
          features that contribute to its awesomeness and potential in various
          applications: Unprecedented Speed and Efficiency: Hedera Hashgraph
          leverages a unique consensus algorithm that allows it to process
          transactions at a remarkable speed. It's capable of handling thousands
          of transactions per second, making it one of the fastest DLT platforms
          available. This incredible efficiency is particularly valuable for
          applications that demand real-time processing, such as financial
          systems and supply chain management. Fair and Secure Consensus: The
          Hashgraph consensus mechanism is based on a combination of
          asynchronous Byzantine Fault Tolerance and Virtual Voting, ensuring a
          fair and secure environment. It mitigates the risk of manipulation or
          collusion and offers robust security for mission-critical
          applications. Low Transaction Costs: Unlike many blockchain platforms
          that suffer from high transaction fees and energy consumption, Hedera
          Hashgraph is energy-efficient and cost-effective. This makes it a
          compelling choice for businesses and individuals looking to reduce
          overhead while maintaining security. Eco-Friendly Approach: Hedera
          Hashgraph's energy efficiency and low environmental impact are
          praiseworthy, especially in the context of growing concerns about the
          carbon footprint of blockchain technologies. It's a more sustainable
          option for those seeking eco-friendly solutions. Decentralization and
          Governance: Hedera Hashgraph operates on a network governed by a
          council of reputable organizations from various industries. This
          governance model seeks to balance decentralization and security,
          ensuring that no single entity has undue control. The council's
          members bring diverse perspectives, promoting a healthy ecosystem.
          Smart Contracts: Hedera Hashgraph offers smart contract functionality,
          enabling developers to build decentralized applications (DApps) on its
          platform. This flexibility extends its utility to a wide range of use
          cases, from tokenization and identity management to gaming and social
          networks. Regulatory Compliance: Hedera Hashgraph is designed with
          regulatory compliance in mind. Its council members help ensure that
          the platform aligns with legal and regulatory requirements, making it
          an attractive choice for enterprises operating in highly regulated
          industries. Interoperability: The platform is committed to
          interoperability, allowing applications and networks to seamlessly
          integrate with it. This interoperability is vital for creating an
          ecosystem where different DLTs and legacy systems can work together
          harmoniously. Global Reach: With a global network of nodes and council
          members, Hedera Hashgraph has a broad reach and the potential to serve
          a wide range of industries and regions. It aims to provide solutions
          that are accessible and beneficial to a global audience. In summary,
          the awesomeness of Hedera Hashgraph lies in its remarkable speed,
          security, efficiency, eco-friendliness, decentralized governance,
          regulatory compliance, and its commitment to interoperability. As it
          continues to evolve, Hedera Hashgraph holds the promise of
          revolutionizing various sectors and becoming a key player in the world
          of distributed ledger technology.
        </p>

        {/* Include your components, buttons, or any other content here */}
      </div>
    </>
  );
}

export default home;
