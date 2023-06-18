"use client"

import { HuddleIframe,iframeApi,useEventListner } from "@huddle01/iframe";

export default function Page()

{

  
useEventListner("lobby:joined", (data) => {console.log({ data });
});

  useEventListner("room:new-peer", (data) => console.log({ data }));

  useEventListner("lobby:initialized", () => {
    iframeApi.initialize({
      redirectUrlOnLeave: "http://localhost:3000/",
      wallets: ["metamask"],
    });
});

return(
  <main className=" h-full flex items-center mt-6">
    <div className="aspect-video w-full mx-auto p-4 flex">
        <HuddleIframe roomUrl="https://iframe.huddle01.com/"
        className="w-full aspect-video"
        />
    </div>

  </main>
)

}