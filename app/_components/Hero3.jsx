import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="items-center   w-11/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-8 py-14 md:py-0">
            <h1 className="text-3xl font-semibold  xl:text-6xl  lg:text-4xl  "><span className="block w-full text-[14px] text-pu mb-4">WHO WE ARE</span> Al-Forqan & Al-Batool
            
            <span className="block text-3xl mt-2">International Schools</span>
            
            </h1>
            <p className="py-4 text-[20px] font-[400] leading-7  2xl:py-8 md:py-6 2xl:pr-5">
              Alforqan is an amazing school where you can excel in academics and also build friendships that will last a lifetime.
            </p>
            <div className="mt-4">
              <Link href="">
              <button className="rounded-md bg-pu text-white px-4 py-2">Learn More</button>
              </Link>
            </div>
          </div>
  
          <div className="pb-10  md:p-10 lg:pt-16 sm:pb-0">
            <Image id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-[90%] sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0 animate-[bounce_8s_ease_alternate_infinite]" src="/hero.png" alt="Awesome hero page image" width="500" height="488"/>
          </div>
        </div>
  )
};

export default Hero3
