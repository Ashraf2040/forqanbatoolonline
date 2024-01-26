"use client"
import styles from "./video.module.css";
import { useState, useEffect } from 'react'
export default function Video() {
    const [isClient, setIsClient] = useState(false)
     useEffect(() => {
    setIsClient(true)
  }, [])
    return (



       <main className={styles.main}>
       {isClient ?<video
                src={require("../../public/Facebook.mp4")}
                autoPlay
                muted
                loop
                className={styles.video}
            /> :<h1>
            
            no longer available
            </h1> }
           
            
        </main>
    );
}