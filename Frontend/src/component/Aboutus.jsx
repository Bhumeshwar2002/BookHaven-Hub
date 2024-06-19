import React, { useState, useEffect, useRef } from 'react';

function Aboutus() {
  const images = [
    'https://th.bing.com/th/id/R.5bc1375f3f5cffbc03e971030566c71a?rik=IJTU0SCvG6sFfg&riu=http%3a%2f%2fsellbooksfast.com%2fwp-content%2fuploads%2f2016%2f02%2fbigstock-Female-customer-in-bookshop-13904552.jpg&ehk=S5hDFE2F%2bQ7%2f6OIBOalARqqkXUMHrik%2bImykRDyB%2fz8%3d&risl=&pid=ImgRaw&r=0',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/03/18/books_1.jpg?width=990',
    'https://youthincmag.com/wp-content/uploads/2019/05/Book-selling.jpg',
    // Add more image URLs as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const firstImageRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Set height of all images to be the same as the first image's height
    const firstImageHeight = firstImageRef.current.clientHeight;
    const imagesToResize = document.querySelectorAll('.slider-image');
    imagesToResize.forEach(image => {
      image.style.height = `${firstImageHeight}px`;
    });
  }, [currentImageIndex]);

  const handleExploreClick = () => {
    // Smooth scrolling to the next section
    const nextSection = document.getElementById('next-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-gray-100 py-16 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 mt-10 text-center">Welcome to Our Bookstore</h2>
          <div className="flex flex-col md:flex-row justify-center items-center relative">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 relative">
              <img
                ref={firstImageRef}
                src={images[currentImageIndex]}
                alt="About Us"
                className="rounded-lg shadow-md p-10 slider-image object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">Discover the Magic of Reading</h3>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id leo et magna faucibus condimentum. Fusce bibendum lobortis aliquam. Phasellus eget purus auctor, scelerisque elit sed, fringilla metus. Integer aliquam leo nisi, a tincidunt ipsum lacinia nec. Sed nec semper magna. Vestibulum euismod velit ac ultricies tincidunt.
              </p>
              <p className="text-lg">
                Integer sed pulvinar mi, eget facilisis libero. Cras non malesuada eros. Nullam convallis ex id felis eleifend, vitae vestibulum tortor aliquam. Aenean volutpat dui et justo maximus, nec vulputate orci ultrices.
              </p>
              <button onClick={handleExploreClick} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Explore More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
                       src="https://images.pexels.com/photos/3713689/pexels-photo-3713689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Free, high-resolution bookselling image

            alt="Parallax Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Immerse Yourself in a World of Stories</h2>
            <p className="text-lg">Explore our vast collection of books from various genres and authors. Let your imagination take flight as you embark on literary adventures.</p>
            <div className="mt-8 flex justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25415.png" alt="Book Icon" className="h-12 w-auto" />
              <img src="https://cdn-icons-png.flaticon.com/512/31/31102.png" alt="Book Icon" className="h-12 w-auto ml-4" />
              <img src="https://cdn-icons-png.flaticon.com/512/25/25415.png" alt="Book Icon" className="h-12 w-auto ml-4" />
            </div>
          </div>
        </div>
      </section>
      <section id="next-section" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Book Recommendations</h3>
              <p>Get personalized book recommendations tailored to your interests and preferences.</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Author Events</h3>
              <p>Join us for author signings, readings, and other exciting events celebrating literature.</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Online Book Club</h3>
              <p>Connect with fellow book lovers and engage in lively discussions about our featured books.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
