import { HashConnect } from "hashconnect";

let hashconnect = new HashConnect();

let appMetadata = {
  name: "Sample project app",
  description: "An simple Hedera dapp",
  icon: "https://absolute.url/to/icon.png",
};

export const pairHashpack = async () => {
  let initData = await hashconnect.init(appMetadata, "testnet", false);
  console.log(`this is initData returned by pairHashpack fn${initData}`);

  hashconnect.foundExtensionEvent.once((walletMetadata) => {
    hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
  });

  hashconnect.pairingEvent.once((pairingData) => {
    console.log("wallet paired");
    console.log(pairingData);

    //accountId = pairingData.accountIds[0]

    const accountId = document.getElementById("accountid");
    accountId.innerHTML = pairingData.accountIds[0];
  });

  return initData;
};
