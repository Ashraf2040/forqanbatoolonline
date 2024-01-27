"use client"
import Image from "next/image";
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Divider from "./Divider";

const Slideshow = () => {
	//Array of Images
	const images = [
		"images/Image1.jpg",
		"images/Image2.jpg",
		"images/Image3.jpg",
		"images/Image4.jpg",
		"images/Image5.jpg",
	];

	return (
		<div className="flex flex-col ">
		
		<div className=" px-4  ">
			

      <Zoom >
				{images.map((each, index) => (
					<div key={index} className="flex justify-center h-[500px] py-4 px-4">
						<Image
							className=" h-full w-[80%]   rounded-md "
							src={`/${each}`} width={500} height={500} alt={each} 
						/>
					</div>
				))}
			</Zoom></div>
		</div>
	);
};

export default Slideshow;





// const zoomInProperties = {
// 	// 	indicators: true,
// 	// 	scale: 1.2,
// 	// 	duration: 5000,
// 	// 	transitionDuration: 500,
// 	// 	infinite: true,
// 	// 	prevArrow: (
// 	// 		<div style={{ width: "30px", marginRight: "30px", cursor: "pointer"  }}>
// 	// 			<svg
// 	// 				xmlns="http://www.w3.org/2000/svg"
// 	// 				viewBox="0 0 512 512"
// 	// 				fill="#2e2e2e"
// 	// 			>
// 	// 				<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
// 	// 			</svg>
// 	// 		</div>
// 	// 	),
// 	// 	nextArrow: (
// 	// 		<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
// 	// 			<svg
// 	// 				xmlns="http://www.w3.org/2000/svg"
// 	// 				viewBox="0 0 512 512"
// 	// 				fill="#01416F"
// 	// 			>
// 	// 				<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
// 	// 			</svg>
// 	// 		</div>
// 	// 	),
// 	// };