import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';

const CycleForm = () => {
  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    cycleBrand: '',
    userPhoneNumber: '',
    userRollNumber: '',
    pricePerHr: '',
    cycleDescription: '',
    image: '',
  });
  const [file,setfile] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //for Image
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData1((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      const response = await fetch('/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData1),
      });
      if (response.ok) {
        // Successful post
        console.log('Data posted successfully');
        // Reset form data
        setFormData1({
          name: '',
          email: '',
          cycleBrand: '',
          userPhoneNumber: '',
          userRollNumber: '',
          pricePerHr: '',
          cycleDescription: '',
          image: '',
        });
      } else {
        // Error handling for failed post
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    console.log(formData1);
  };
  const upload = ()=>{
    const formData = new FormData();
    formData.append('name',formData1.name)
    formData.append('email',formData1.email)
    formData.append('cycleBrand',formData1.cycleBrand)
    formData.append('userPhoneNumber',formData1.userPhoneNumber)
    formData.append('userRollNumber',formData1.userRollNumber)
    formData.append('pricePerHr',formData1.pricePerHr)
    formData.append('cycleDescription',formData1.cycleDescription)
    formData.append('image',file)
    console.log(formData1)
    axios.post('/post',formData1)
    .then(res=>{console.log(formData1)}).catch(er =>console.log(er))
  }
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
        <div className="max-w-md mx-auto py-10">
          <div className='py-5 text-2xl '>
            Post your Cycle 
          </div>
          <form onSubmit={upload} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData1.name}
              onChange={handleChange}
              placeholder="Name"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData1.email}
              onChange={handleChange}
              placeholder="Email"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="cycleBrand"
              value={formData1.cycleBrand}
              onChange={handleChange}
              placeholder="Cycle Brand"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="tel"
              name="userPhoneNumber"
              value={formData1.userPhoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="userRollNumber"
              value={formData1.userRollNumber}
              onChange={handleChange}
              placeholder="Roll Number"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="number"
              name="pricePerHr"
              value={formData1.pricePerHr}
              onChange={handleChange}
              placeholder="Price Per Hour"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <textarea
              name="cycleDescription"
              value={formData1.cycleDescription}
              onChange={handleChange}
              placeholder="Cycle Description"
              className="block w-full px-4 py-2 border rounded-md"
            ></textarea>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e)=>{setfile(e.target.files[0])}}
              className="block w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="block w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
};

export default CycleForm;
