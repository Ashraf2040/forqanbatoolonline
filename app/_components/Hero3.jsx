import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="items-center   w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-14 py-14 md:py-0">
            <h1 className="text-3xl font-semibold  xl:text-6xl  lg:text-4xl bg-gradient-to-r from-primary to-pu bg-clip-text text-transparent"><span className="block w-full text-2xl mb-4">Welcome to</span> Alforqan & Albatool
            
            <span className="block text-3xl mt-2">International School</span>
            
            </h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Alforqan is an amazing school where you can excel in academics and also build friendships that will last a lifetime.
            </p>
            <div className="mt-4">
              <Link href="">
              <button className="btn bg-gradient-to-r from-primary to-pu text-white px-4 py-2">Learn More</button>
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
