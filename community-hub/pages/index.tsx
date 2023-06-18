// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import page from './page'

import { useRouter } from "next/router";
import Page from "./Page";
import { useState } from 'react';
import Link from "next/link";
import Homes from "./Home";
// import { HuddleIframe } from "@huddle01/iframe/dist/declarations/src";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router=useRouter()

  const [showHuddle,setShowHuddle]=useState(false)

  const startMeet=()=>{
    // router.push(<Page />)
    setShowHuddle(true)
    router.push('/Page')
  }

  const Change=()=>{

  }

  

  return (
    <div>
    {/* <h2>hemant</h2> */}
    {/* <button className=" text-2xl" onClick={startMeet}>click</button> */}
    
    {/* {showHuddle && <Page />} */}
    {/* <button>Home</button> */}
    <Homes />
    {/* <Home /> */}
    {/* {showHuddle && <Page />} */}

    </div>
  )
}
