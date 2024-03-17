import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react';

function Contact() {

    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, message: message }),
    })
    .then(response => {
      if (response.ok) {
        window.alert('Message sent successfully');
        // Do something if the message was sent successfully
      } else {
        window.alert('Failed to send message');
        // Handle error if message failed to send
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any network errors
    });
  };

  return (
    <div>
        <Navbar />
        <div className='content'>
        <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
        <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65705.73460873877!2d80.14393808644549!3d12.870446552701116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Kancheepuram!5e0!3m2!1sen!2sin!4v1706986788721!5m2!1sen!2sin"
            style={{ filter: 'grayscale(1.7) contrast(0.9) opacity(0.6)' }}
        ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Your feedback is much valiable</p>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button onClick={handleSubmit} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3"></p>
            </div>
        </div>
        </section>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;
