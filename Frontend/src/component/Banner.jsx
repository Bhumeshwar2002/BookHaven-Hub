import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mt-0">
                <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-32 relative mt-20 relative">
                    <div className="space-y-12 md:mt-0 mt-12">
                        <h1 className="md:text-4xl font-bold">
                            Explore the World of Books with Us!
                            <span className="text-pink-500"> Discover Something New Every Day!</span>
                        </h1>
                        <p className="text-xl">
                            Welcome to our book universe, where adventure, knowledge, and inspiration await! Immerse yourself in captivating stories, enlightening insights, and endless possibilities. Whether you're seeking thrilling escapades, profound wisdom, or heartwarming tales, we have something for everyone.
                        </p>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn btn-secondary bg-pink-500 mt-5">Subscribe Now</button>
                </div>
                <div className="order-1 w-full md:w-1/2">
                    <img src={banner} className="md:w-90 rounded-lg md:h-90 relative md:left-5 md:top-20 left-0 top-20 mb-18" alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;
