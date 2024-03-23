import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Please enter a valid email address');
          return false;
        }
        setEmailError('');
        return true;
      };


    const handleSubmit = () => {
        if (!validateEmail()) {
            window.alert("Enter valid Details")
            return;
        }
        console.log("Form Data:", { email, password}); 
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:email, password:password}),
        })
        .then(response => {
            if (response.ok) {
              console.log('Login Successfull');
              window.location.href = "/"
              
            } else {
              window.alert('Failed to login');
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
            Login 
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

export default Login;
