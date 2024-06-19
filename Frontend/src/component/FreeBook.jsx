import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Cards from "./cards";
function FreeBook() {
	// in javascript filter method is used to filter the data present in the the form of arrays
	// === means check type as well as data
	const filterData = list.filter((data) => data.category === "free");
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	// console.log(filterData);
	return (
		<>
			<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
				<div>
					<h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						sit rerum expedita fugit aliquam id, repudiandae nulla tenetur
						molestias vero obcaecati voluptas debitis fuga eum quisquam ipsa eos
						harum consequuntur.
					</p>
				
			</div>
			<div>
				<Slider {...settings}>

{/*props are being used here tey are used to transfer data from parent to child here parent is FreeBook.jsx and Cards.jsx is child  */}

{/* props allows component to be dynamic and flexible once they receive diffent data and render accordingly */}

{/* map funtion is used when the array is there here filterdata contains array */}
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
				</Slider>
			</div>
            </div>
		</>
	);
}

export default FreeBook;
