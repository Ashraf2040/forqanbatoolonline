


const Apply = () => {
  return (
    <div className="h-48 relative grid grid-cols-2  pb-8      " >
    <div className="bg- py-4  bg-[#064C77]  col-span-1 h-full flex items-center   flex-col justify-center gap-8 " >
    <h2 className="text-2xl font-bold text-white " >    Apply for online Admission</h2>
<button className="bg-white rounded-lg font-semibold  px-4 py-2">Apply Now</button>
    </div>
    <div className=" col-span-1 flex items-center h-full flex-col justify-center gap-8" >
    <h2 className="text-2xl  font-bold " >    Book an Appointment</h2>
<button className="rounded-md bg-[#064C77] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</button>
    </div>
    </div>
  )
};

export default Apply
