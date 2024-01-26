


import Image from 'next/image'
import SideBar from './_components/SideBar'

import NewHero from './_components/NewHero'
import Video from './_components/Video'
import Achievment from './_components/Achievment'
import About from './_components/About'
import SocialMediaFeed from './_components/SocialMediaFeed'
import Apply from './_components/Apply'
import Hero2 from './_components/Hero2'


export default function Home() {
  return (
  <div className=' '>
   {/* <NewHero />
   <Video /> */}
   {/* <NewHero /> */}
   <Hero2 />
<Video />
<Achievment />
<About />
<SocialMediaFeed />
<Apply />
    {/* <Main /> */}
  </div>
  )
}
