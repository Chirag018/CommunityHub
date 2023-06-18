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
                  {/* {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )} */}
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
                  <Link href="/Search">
                    <p>Opt-in</p>
                  </Link>
                </li>
                <li className="text-white">
                  <div>
                    {walletAddress ? (
                      <button onClick={disconnectWallet}>{walletAddress}</button>
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
