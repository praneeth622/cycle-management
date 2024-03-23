import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber,setPhoneNumber] = useState(0)
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Please enter a valid email address');
          return false;
        }
        setEmailError('');
        return true;
      };
    
      const validatePhoneNumber = () => {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
          setPhoneError('Please enter a 10-digit phone number');
          return false;
        }
        setPhoneError('');
        return true;
      };
    

    const handleSubmit = () => {
        if (!validateEmail() || !validatePhoneNumber()) {
            window.alert("Enter valid Details")
            return;
        }
        console.log("Form Data:", { email, password, name, phoneNumber }); 
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:email, password:password, name:name, phoneNumber:phoneNumber }),
        })
        .then(response => {
            if (response.ok) {
              window.alert('Message sent successfully');
              window.location.href = "/"
              
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
        <div className="max-w-md mx-auto py-20 ">
          <div className='py-5 text-3xl '>
            Register 
          </div>
          <div className="space-y-4">
          <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Email"
              className="block w-full px-4 py-2 border rounded-md"
            />
          <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Password"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <input
              type="tel"
              name="userPhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="block w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="block w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div></div>
        <Footer />
    </div>
  );
}

export default Register;
