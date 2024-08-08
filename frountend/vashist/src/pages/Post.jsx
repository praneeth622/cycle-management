import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';

const CycleForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const upload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://supreme-barnacle-745gpx4v747hpw9-5000.app.github.dev/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      alert('File uploaded successfully: ' + response.data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto py-10">
        <div className='py-5 text-2xl'>
          Post your Cycle
        </div>
        <form onSubmit={upload} className="space-y-4">
          <input
            type="file"
            name="image"
            accept="image/*,video/*"
            onChange={handleFileChange}
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
      <Footer />
    </div>
  );
};

export default CycleForm;
