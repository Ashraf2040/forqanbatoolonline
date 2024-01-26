import Image from "next/image";

const NewHero = () => {
  return (
 <div className="py-8 shadow-lg shadow-primary mb-7  h-screen bg-cover mt-4 ">
       
        <section className="py-4 mt-12  bg-transparent sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="w-full px-8">
            <div className="relative items-center flex justify-between  w-full">
              <div className=" flex flex-col justify-center items-center  ">
                
                <h1 className="mt-6 flex flex-col  text-2xl leading-10 font-semibold  sm:mt-10 sm:text-5xl lg:text-2xl xl:text-3xl"><span className="text-transparent block bg-clip-text bg-gradient-to-r from-primary to-pu text-5xl font-extrabold leading-[70px] tracking-[8px] mb-8">Alforqan & Albatool </span><span className="  tracking-[4px] text-primary self-center">International School</span> </h1>
                
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-primary to-primary group-hover:shadow-lg group-hover:shadow-pu" />
                  <a href="#" title className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-purple-50 bg-primary border border-transparent rounded-full" role="button"> Start Exploring  </a>
                </div>
                
              </div>
              <div className="">
                <Image className="rounded-sm w-full   " src="/intro.jpg" width={700} height={700} alt="logo" />
              </div> 
             </div>
          </div>
        </section>
      </div>
  )
};

export default NewHero
