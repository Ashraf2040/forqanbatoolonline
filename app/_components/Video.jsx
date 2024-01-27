"use client"
import Image from "next/image";
import styles from "./marquee.module.css";
import { useState, useEffect } from 'react'
export default function Video() {
    const [isClient, setIsClient] = useState(false)
     useEffect(() => {
    setIsClient(true)
  }, [])
    return (
<div className="grid grid-cols-2 px-5 gap-10 my-20 py-20 relative">


<span className="absolute top-0 w-full font-semibold flex items-center  bg-[#F4F1F0]   h-16 ">

<div className={styles.marquee}>
    <div className={styles.marquee__group}>
      <span>Welcome To AL-Forqan International School </span>
      <span>Welcome To <span className="text-pu">AL-Forqan & Al-Batool </span> International Schools </span>
      <span>Welcome To <span className="text-pu">AL-Forqan & Al-Batool </span> International Schools </span>
      <span>Welcome To <span className="text-pu">AL-Forqan & Al-Batool </span> International Schools </span>
     
    
      
    </div>
    </div>
</span>

<div className="col-span-1  ">{isClient ?<video
                src={require("../../public/video.mp4")}
                autoPlay
                muted
                loop
                className="rounded-lg h-[400px]"
            /> :<h1>
            
            no longer available
            </h1> }</div>
<div className="col-span-1 h-full">

<Image src="/forqan.jpg" width={600} height={500} className="h-[400px] w-full rounded-lg"   alt="forqan"/></div>

       
           
            
        </div>



       
    );
}