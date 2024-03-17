import React from 'react';
import Navbar from'../components/navbar'
import Footer from '../components/footer'
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import { useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, CloudArrowDownIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import gif from '../asserts/bicycleG.gif'

const features = [
  {
    name: 'Post a Cycle',
    description:
      'Explore your city or countryside in an eco-friendly and convenient way with GareUpCycle. Our platform connects you with bicycles available for rent from students.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Rent a Cycle',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowDownIcon,
  },
  {
    name: 'Browse and Search',
    description:
      "Provide users with a catalog of available bikes to rent. Include  search functionalities to help users.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Reviews and Ratings',
    description:
      "Allow users to leave reviews and ratings for bikes they 've rented. This feature helps build trust among users.",
    icon: LockClosedIcon,
  },
]


function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <div>

        <div className="container main" style={{ 
          backgroundImage: `url(${gif})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
       }}>
        <div className="relative isolate px-6 pt-14 lg:px-8  ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sky-400 tracking-tight sm:text-6xl"style={{
                color :"#fff"
              }}>
                Your Trusted Partner for Every Ride.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600" style={{
                color :"#febc4d"
              }}>
                Embodies the spirit of adventure and discovery, inviting individuals to embrace the freedom and excitement of cycling. This tagline suggests that cycling is not just a mode of transportation but a gateway to new experiences and exploration.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/find"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Find a Cycle
                </a>
                <a href="/post" className="text-sm font-semibold border-2 border-blue-600 rounded-md px-3 py-2 leading-6 text-gray-900">
                <Link to="/post">Post a Cycle</Link> <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <div>
      <div className="bg-white py-18 sm:py-10 sm:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;