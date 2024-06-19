import React from 'react';

function ContactUs() {
  const pseudoFeedbacks = [
    { name: "John Doe", feedback: "Amazing bookstore! I found all the books I was looking for." },
    { name: "Jane Smith", feedback: "The customer service here is exceptional. Highly recommended!" },
    { name: "David Johnson", feedback: "Great selection of books and very knowledgeable staff." }
  ];

  return (
    <section id="contact" className="bg-gray-100 py-20  dark:bg-slate-900 dark:text-white ">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Share Your Feedback</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2">
              <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">Your Feedback</label>
              <textarea id="feedback" name="feedback" rows="4" placeholder="Share your feedback here" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="col-span-2">
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">Send Feedback</button>
            </div>
          </form>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">What People Are Saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pseudoFeedbacks.map((feedback, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-md shadow-md">
                  <p className="text-gray-700">{feedback.feedback}</p>
                  <p className="text-gray-600 mt-2">- {feedback.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
