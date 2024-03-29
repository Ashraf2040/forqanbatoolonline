import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"
const Header = () => {
  return (

    
    <header className=" uppercase   w-full flex items-center  px-8 border-2   justify-between h-32">
    
    {/* <div className="h-[36px] w-[600px] flex items-center text-purple-100 gap-4 rounded-bl-3xl bg-primary absolute right-0 top-0">
    <div className="dropdown">
  <div tabIndex={0}  className=" m-1 px-6  text-base-500 cursor-pointer">Community<span className="text-[12px] ml-1">▼</span></div>
  <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 mt-1 shadow bg-primary rounded-md ml-5 w-52 border-t-4 border-secondary">
    <li className="border-b-2"><a>Family Members</a></li>
    <li className="border-b-2"><a>Faculty and Stuff</a></li>
    <li><a>Our Community</a></li>
  </ul>
         </div>
         <Link href="">Athlets</Link>
         <Link href="">Calendeder</Link>
         <Link href="">Employment</Link>
    
    </div> */}
   <div className="md:flex md:items-center md:gap-12">
    <Link href="/"> <Image src="/logo.png" width={500} height={500} alt="logo"  className="h-28 w-40"/></Link>  
      </div>
      

      <div className=" md:block gap-8 self-end ">
        <nav className=" flex gap-6  mb-5 ">
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold  cursor-pointer hover:text-pu transition-opacity">About </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52 border-t-4 border-primary">
    <li className="border-b-2 border-primary"> <a>Our Mission & Vision</a></li>
    <li ><a>Accredation & Partner</a></li>
  </ul>
         </div>
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold cursor-pointer hover:text-pu ">Academic</div>
  <ul tabIndex={0}  className="dropdown-content border-t-4 border-primary z-[1] menu mt-2 p-2 shadow bg-base-100 rounded-box w-52">
    <li className="border-b-2 border-primary "><a>Elementary School ( K-6 )</a></li>
    <li className="border-b-2 border-primary "><a>Middle School ( 7-9)</a></li>
    <li className="border-b-2 border-primary "><a>High School ( 10-12)</a></li>
    <li className="border-b-2 border-primary "><a>Academic Calendar</a></li>
    <li ><a>Training & Development</a></li>
  </ul>
         </div>
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold cursor-pointer hover:text-pu ">Online Learning</div>
  <ul tabIndex={0} className="dropdown-content z-[1] border-t-4 border-primary mt-2 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li className="border-b-2 border-primary"><a>Student Guide</a></li>
    <li className="border-b-2 border-primary"><a>Parent Guide</a></li>
    <li className="border-b-2 border-primary"><a>Teacher Guide ( 10-12)</a></li>
    <li ><a>Adminstrator Guide</a></li>
    
  </ul>
         </div>
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold cursor-pointer hover:text-pu  " >Enrollment</div>
  <ul tabIndex={0} className="dropdown-content z-[1] border-t-4 border-primary mt-2 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li className="border-b-2 border-primary"><a>Admission Process</a></li>
    <li className="border-b-2 border-primary"><a>Enrollment Form</a></li>
    <li ><a>Tuition</a></li>
  
    
  </ul>
         </div>
         
          <div className="dropdown">
  <div  tabIndex={0}  className=" m-1  font-semibold cursor-pointer text-pu  hover:text-pu "> <Link href="/ai-services">AI Services</Link></div>

         </div>
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold  cursor-pointer text-pu hover:text-pu  "><Link href="/digital-curriculum">Digital Curriculum</Link></div>

         </div>
          <div className="dropdown">
  <div tabIndex={0}  className=" m-1  font-semibold  cursor-pointer hover:text-pu  ">Help and Support</div>
  <ul tabIndex={0} className="dropdown-content z-[1] border-t-4 border-primary menu mt-2 p-2 shadow bg-base-100 rounded-box w-52">
    <li className="border-b-2 border-primary"><a>Technical Support</a></li>
    <li><a>Academic Support</a></li>
    
  
    
  </ul>
         </div>
        </nav>
      </div>
  <div><Link className="self-center" href=""><button className=" bg-pu rounded-md text-white px-4 py-2">JOIN US</button></Link></div>    

      
      {/* <div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn bg-primary  text-purple-100 font-bold rounded-r-full">JOIN US</button>
</div> */}
      
    
  
</header>
   
  )
};

export default Header
