import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
function About() {
  return (
    <div>
        <Navbar />
        <div>
        <section className="text-gray-700 body-font bg-gray-100">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">About GearUpCycle</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Welcome to GearUpCycle, your ultimate destination for hassle-free cycle rentals! At GearUpCycle, we're passionate about promoting sustainable transportation and enabling outdoor enthusiasts to explore nature in an eco-friendly way.</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Mission</h2>
                        <p className="leading-relaxed text-base">Our mission at GearUpCycle is to make cycling accessible to everyone while promoting a healthier lifestyle and reducing carbon emissions. We believe that every pedal stroke contributes to a greener planet, and we're dedicated to providing high-quality, well-maintained bicycles for individuals, families, and groups to enjoy.</p>
                    </div>
                    </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 8v10M9 17h6"></path>
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Services</h2>
                        <p className="leading-relaxed text-base">GearUpCycle offers a wide range of rental options to suit your needs, whether you're planning a leisurely ride through scenic trails, embarking on a challenging mountain biking adventure, or exploring the city streets. Our fleet includes top-notch bicycles, from comfortable cruisers to rugged mountain bikes, ensuring that you have the perfect ride for your outdoor escapades.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
        <Footer />
    </div>
  );
}

export default About;