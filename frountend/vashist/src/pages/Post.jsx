import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react';

function Post() {

  const [formData, setFormData] = useState({
    name: '',
    cycleBrand: '',
    userPhoneNumber: '',
    userRoolNumber: '',
    imageSrc: '',
    pricePerHrColour: '',
    cycleDescription: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have an endpoint to send this data to
    fetch('your-post-endpoint', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Reset form after successful submission
        setFormData({
          name: '',
          cycleBrand: '',
          userPhoneNumber: '',
          userRoomNo: '',
          imageSrc: '',
          pricePerHrColour: '',
          cycleDescription: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });}

  return (
    <div>
        <Navbar />
        <div className="mx-auto max-w-lg py-14">
          <h2 className='ext-left text-2xl font-bold mb-4'>Enter the details to post your cycle</h2>
      <form onSubmit={handleSubmit} className="bg-white  px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cycleBrand">
            Roll number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rollno"
            type="text"
            name="cycleBrand"
            value={formData.userRoolNumber}
            onChange={handleChange}
            placeholder="Enter Roll Number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cycleBrand">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            name="cphoneNumber"
            value={formData.userPhoneNumber}
            onChange={handleChange}
            placeholder="Enter cycle brand"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 border-none text-sm font-bold mb-2" htmlFor="image">
          Cycle Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cycleImage"
            type="file"
            name="cycleImage"
            value={formData.imageSrc}
            accept="image/*" // Specify accepted file types (in this case, any image type)
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cycleBrand">
            Price Per Hour
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="num"
            name="price"
            value={formData.pricePerHrColour}
            onChange={handleChange}
            placeholder='Price per hour'
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cycleBrand">
            Cycle Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="num"
            name="price"
            value={formData.brandDescription}
            onChange={handleChange}
            placeholder='Price per hour'
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Post;