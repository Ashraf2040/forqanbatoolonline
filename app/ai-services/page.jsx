"use client"

import Image from "next/image";

const AiServices = () => {



  return (
    <div className="px-4 h-fit pt-16">
    <div className="flex flex-col pl-4 pb-4 items-center  gap-8">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8  lg:text-4xl ">The AI companion to top educators and schools</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-4xl text-pu ml-12 mr-2">Meet</span> Apex Co-Pilot, your new teaching assistant. Apex Co-Pilot helps teachers boost productivity and personalize learning, all with the confidence that it’s private, safe, and secure. <span className="block mt-4">
     Our platform has emerged as the preferred option for educators and prestigious schools in Saudi Arabia and beyond. These institutions trust us to consistently surpass their expectations, enabling them to reach their academic objectives both now and in the future.
     </span></p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Ai/Picture11.png" alt="ai1" width={500} height={500} className="col-span-1" />
    <p className="text-2xl font-bold">Apex Co Pilot</p>
    </div> 
     </div>
     </div>
    <div  className="flex flex-col items-center gap-8 mt-12">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 lg:text-4xl">Save hours of time and make your life easier</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-2xl text-pu ml-12 mr-2">Supercharge</span>  your teaching efforts with AI. <span className="block mt-4">
     In collaboration with educators, our team has intricately crafted features aimed at revolutionizing teaching. Explore how these features can simplify your life.
     </span></p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Ai/Ai2.png" alt="ai1" width={600} height={600} className="col-span-1 "  />
   
    </div> 
     </div>
     </div>
    
    
     <div className="grid grid-cols-3 mt-12 gap-20 items-center ">
      <div className="flex grid-cols-1 ">
    <Image src="/Ai/A14.png" alt="ai1" width={500} height={400} className="col-span-1 "  />
   
    </div> 
      <div className="col-span-2">

      <h1 className="font-bold text-3xl mb-8  lg:text-4xl ">Differentiated classroom resources at your fingertips.</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 pr-8 "><span className="text-2xl text-pu ml-8 mr-2">Craft</span>  customized learning materials, spanning from worksheets to interactive quizzes, meticulously aligned with Apex Learning curriculum. Seamlessly modify content to accommodate various learning styles and proficiency levels. Generate a diverse array of student-centered resources instantly. Each resource is thoughtfully leveled to address a variety of learning needs and styles.</p>
      </div> 
     
   
     </div>
     <div className="flex flex-col items-center gap-8 mt-12">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 lg:text-4xl ">Enrich courses with 10+ standards-aligned curriculum tools</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-2xl text-pu ml-12 mr-2">Streamline</span>   the course creation process with the help of Apex Co-Pilot AI assistance. Effortlessly design comprehensive lessons plans, summaries, discover novel teaching strategies, or incorporate additional resources, and assessments that align with standards, ensuring ease and efficiency.
     </p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Ai/A16.png" alt="ai1" width={600} height={600} className="col-span-1 "  />
   
    </div> 
     </div>
     </div>
     <div className="flex flex-col items-center gap-8 mb-16 mt-12">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 lg:text-4xl">Your 24/7 AI teaching assistant</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-2xl text-pu ml-12 mr-2">Leverage</span>   Apex Co-Pilots sophisticated AI chat for immediate support. Whether addressing pedagogical inquiries, offering teaching tips, or providing curriculum guidance, our AI chat serves as your constant 24/7 personal teaching assistant.
     </p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Ai/Ai171.png" alt="ai1" width={500} height={500} className="col-span-1 "  />
   
    </div> 
     </div>
     </div>

     <div className="flex justify-center  w-full">
     <p className="text-xl  font-semibold text-center bg-purple-100 px-4 py-4 leading-10 rounded-xl shadow-lg shadow-primary w-4/6"> <span className="text-pu">Al Batool and Al Forqan</span>  International Online schools have spearheaded the integration of Apex Co-Pilot, an innovative AI assistant for teachers, developed by Learning Oasis for Educational Consultancy in collaboration with Edmentum Inc.</p>
     </div>
   
    </div>
  )
};

export default AiServices
