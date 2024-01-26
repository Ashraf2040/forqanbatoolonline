import Image from "next/image";
import Link from "next/link";
import Splitter from "../_components/Splitter";

const DigitalCurriculum = () => {
  return (
    <div className="w-screen">
    <div className="flex flex-col items-center gap-8 px-8 mt-12 ">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Apex Learning Courses</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 text-justify"><span className="text-2xl text-pu ml-12 mr-2">Discover</span>    a revolutionary educational experience for grades 6–12 with Apex Learnings advanced digital curriculum. Our platform seamlessly combines innovation and excellence, delivering personalized and engaging content designed by expert educators. Nurturing a student-centric environment, Apex Learning empowers learners, fostering critical thinking and a lasting passion for learning. Join us in elevating education to new heights – where the future takes shape.
     </p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Picture20.png" alt="ai1" width={600} height={500} className="col-span-1 mb-4 "  />
   
    </div> 
     </div>
     </div>
        
   
    <div className="flex flex-col items-center gap-8 px-8 mt-12">
    
     <div className="grid grid-cols-2 items-center">
     <div className="flex flex-col items-center">
    <Image src="/Picture211.png" alt="ai1" width={600} height={600} className="col-span-1 "  />
   
    </div>
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Opportunities to Thrive</h1>
      <p className="col-span-1 text-lg font-semibold leading-10  text-justify"><span className="text-2xl text-pu ml-12 mr-2">Education</span>    cannot thrive on a one-size-fits-all model, as it falls short of addressing the diverse learning needs of each individual student. Whether some require extra assistance, others seek flexibility, or some have struggled in traditional settings, Apex Courses offer a tailored solution. Our instructional design not only builds knowledge but also boosts confidence, providing the necessary scaffolding and support to guide students back on the path to graduation and beyond.
     </p>
     <Link href="https://firebasestorage.googleapis.com/v0/b/forqan-website.appspot.com/o/Learning%20Oasis%20Brochure.pdf?alt=media&token=3b2e3bb2-f8d6-4394-b17e-188edd94215f"><button className="btn bg-primary mt-8 text-white" type="download">Download brochure</button></Link>
      </div> 
     
     
     </div>
     </div>
     <div className="flex flex-col items-center gap-8 px-8  mt-12">
    
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Ministry of Education Approval for Excellence</h1>
      <p className="col-span-1 text-lg font-semibold leading-10  text-justify"><span className="text-2xl text-pu ml-12 mr-2">Discover</span> the pinnacle of educational approval as Apex Learning proudly announces its accreditation by the Ministry of Education in Saudi Arabia. Our digital curriculum stands as a beacon of excellence, aligning seamlessly with the educational standards set by the Ministry. Join the ranks of institutions and learners nationwide benefiting from an approved, innovative, and effective approach to education that meets the highest standards of Saudi Arabias Ministry of Education. Elevate your learning experience with Apex – where approval meets excellence.
     </p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/Picture31.png" alt="ai1" width={400} height={400} className="col-span-1 "  />
   
    </div> 
     </div>
     <div className="w-4/6 flex flex-col">
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary  ">Our Evidence—your Impact</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 text-justify"><span className="text-2xl text-pu ml-12 mr-2">Explore</span>  the compelling evidence in our two featured case studies, demonstrating the undeniable impact of Apex Courses on crucial educational outcomes. Witness tangible results such as heightened student achievement, elevated graduation rates, and a greater number of students prepared for success in both college and their chosen careers. The proof is in the outcomes—Apex Courses make a meaningful difference.
     </p>

     
    <Link className="btn w-fit px-6 self-center bg-primary mt-8 text-white" href="https://firebasestorage.googleapis.com/v0/b/forqan-website.appspot.com/o/Case-Study-Learning-Oasis-Final-1.pdf?alt=media&token=25a448d9-c446-4de8-9482-1d68df6e016a"><button >Case Study</button></Link> 
     
     
      </div> 
     </div>
      <div className="flex flex-col items-center gap-8 px-8  mt-12">
    
     <div className="grid grid-cols-2 items-center">
     <div className="flex flex-col items-center">
    <Image src="/Picture41.png" alt="ai1" width={450} height={500} className="col-span-1 "  />
   
    </div>
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Rigorous and Mastery-Based Instruction</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 text-justify"><span className="text-2xl text-pu ml-12 mr-2">Apex Courses</span>  make rigorous, standards-based instruction accessible to all students. Complicated concepts are often presented as visuals or as interactive activities, which add an extra layer of practice to help learners master material—not just get through it. Along the way, they have access to multiple learning tools to help them understand and Our Apex Learning digital curricula are designed to actively engage students and include embedded learning tools to prepare all students to succeed.
     </p>
     
      </div> 
     
     
     </div>
     </div>
      <div className="grid grid-cols-2 items-center mt-12 ">
      <div className="px-8">
      <h1 className="font-semibold text-3xl mb-8  text-primary mt-4 border-b-4 border-primary w-fit shadow-md shadow-primary px-4 py-2">Instruct with proven pedagogical design</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "> High-impact videos, practice, and self-checks draw on active learning principles to help students make connections and reinforce depth of understanding.</p>
      <h1 className="font-semibold text-3xl mb-8  text-primary  mt-4 border-b-4 border-primary w-fit shadow-md shadow-primary px-4 py-2">	Support students when they need it most</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "> Built-in supports like printable transcripts, translation tools, and study guides give students a little extra help when and where they need it.</p>
      <h1 className="font-semibold text-3xl mb-8  text-primary mt-4 border-b-4 border-primary w-fit shadow-md shadow-primary px-4 py-2">Gain insights into pacing and progress</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "> Detailed and summary-level dashboard views make it easy for educators to monitor individual student and classroom pacing and progress.</p>
      <h1 className="font-semibold text-3xl mb-8 border-b-4 border-primary w-fit shadow-md shadow-primary px-4 py-2 text-primary mt-4">Prioritize academic integrity</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "> AI-generated content and plagiarism detection through Copyleaks proactively guides teachable moments as students develop good writing skills.</p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/div.png" alt="ai1" width={520} height={520} className="col-span-1 "  />
    <Image src="/lol.png" alt="ai1" width={520} height={520} className="col-span-1 "  />
   
    </div> 
     </div>
      <div className="flex flex-col items-center gap-8 px-8  mt-12">
    
     <div className="grid grid-cols-2 items-center">
     <div className="">
    <Image src="/apex.png" alt="ai1" width={700} height={350} className="col-span-1 "  />
   
    </div>
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Empowering Parents with Weekly Progress Reports</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-2xl text-pu ml-12 mr-2">Experience</span>  peace of mind as Apex Learning keeps parents informed about their childs academic journey through our innovative weekly automated reports. Actively engage parents in their childs education, track advancements, and celebrate successes seamlessly with our platform. At Apex Learning, empowering parents as active partners in their childs learning experience is our mission. Elevate their connection to education – where progress meets transparency.
     </p>
     
      </div> 
     
     
     </div>
     <div className="grid grid-cols-2 items-center">
      <div>
      <h1 className="font-semibold text-3xl mb-8 text-center text-primary ">Success without Boundaries</h1>
      <p className="col-span-1 text-lg font-semibold leading-10 "><span className="text-2xl text-pu ml-12 mr-2">Apex Courses</span>  offer administrators comprehensive support in meeting the diverse learning needs of their student populations. Our digital courses are designed to cater to various educational requirements, providing administrators with the tools for a customized and effective learning environment. Join administrators nationwide who trust Apex Learning for flexible and empowering solutions.
     </p>
      </div> 
     
    <div className="flex flex-col items-center">
    <Image src="/apex12.png" alt="ai1" width={600} height={400} className="col-span-1 rounded-md "  />
   
    </div> 
     </div>
     </div>
    </div>
  )
};

export default DigitalCurriculum
