import Head from "next/head";
import Image from "next/image";


export default function TopIntro() {
  return (
    <div className="mt-1 pt-20 border-b-4 border-secondary">
      <div className="flex  h-96 container mx-auto mb-4 bg-base-300">
        <div className="flex  items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div className="">
            <h2 className="text-5xl font-bold mb-4 text-primary md:text-4xl">
             Al-Forqan International School
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              AlForqan Int School starts learners on an exciting educational journey in their primary years, helping them to become confident, responsible, reflective, innovative and engaged..
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
            <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-secondary px-5 py-3 rounded-xl text-md font-semibold text-primary hover:text-white shadow-xl hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">About Us.</button> 
              <button className="md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-secondary px-5 py-3 rounded-xl text-smtext-md font-semibold text-primary hover:text-white shadow-xl hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">Explore</button> 
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
          <div className="h-full" >
            <div className="h-full bg-primary "><Image src="/hero2.jpg" alt="logo" width={800} height={800} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}