import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Web3 from "web3";

export default function Homes() {
  const [navbar, setNavbar] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = () => {
    if (typeof window.ethereum !== "undefined") {
      // const web3 = new Web3(window.ethereum);

      window.ethereum
        .enable()
        .then((accounts) => {
          if (window.ethereum.networkVersion == "80001") {
            console.log("connected to metamask with account : ", accounts[0]);
            setWalletAddress(accounts[0]);
          } else {
            alert("switch to mumbai");
          }
        })
        .catch((error) => {
          console.error("error connecting to metamask: ", error);
        });
    } else {
      console.error("metamask is not available.");
    }
  };

  const disconnectWallet=()=>{
    setWalletAddress('')
  }

  return (
    <div>
      <Head>
        <title>Community-Hub</title>
        <meta name="description" content="Community-Hub" />

        {/* <link rel="icon" href="" /> */}
      </Head>
      <nav className="bgImage w-full bg-white shadow ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                {/* <h2 className="text-2xl text-white font-bold">NEXT JS</h2> */}
                <Image
                  src="/Community-hub.jpg"
                  alt="hello"
                  width={60}
                  height={280}
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl">
                <li className="text-white">
                  <Link href="/Search">
                    <p>Search</p>
                  </Link>
                </li>
                
                <li className="text-white">
                  <div>
                    {walletAddress ? (
                      <>
                      <button onClick={disconnectWallet}>{walletAddress}</button>
                      <li className="text-white">
                  <Link href="/Page">
                    <p>Opt-in</p>
                  </Link>
                </li>
                </>
                    ): (
                      <button onClick={connectWallet}>connect</button>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16">
          <h1 className="text-2xl font-bold text-blue-500">
            DISCOVER YOUR NEXT FAVORITE NFT
          </h1>
        </div>
      </nav>
    </div>
  );
}
