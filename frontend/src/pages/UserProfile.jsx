import React from 'react'
import Navbar from '../components/navbar'

const UserProfile = () => {
  return (
    <>
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar pageName="Profile" />
      
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-cyan-500 to-pink-300">
        <div className="flex items-center justify-center min-h-full py-20">
          <div className="relative w-full max-w-lvh mx-4 bg-white rounded-2xl shadow-lg text-center p-6 pt-20 mb-8">
            {/* Top icons */}
            <div className="absolute top-4 left-4 text-pink-500 flex items-center gap-1">
              <span className="text-sm font-medium">Connect</span>
            </div>
            <div className="absolute top-4 right-4 text-pink-500 flex items-center gap-1">
              <span className="text-sm font-medium">Message</span>
            </div>

            {/* Profile Image */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
              <img
                src=""
                alt="Profile"
                className="w-38 h-38 rounded-full border-2 border-white shadow-lg"
              />
            </div>

            {/* Info */}
            <h2 className="text-3xl font-semibold mt-9">Samantha Jones</h2>
            <p className="text-md text-gray-500">New York, United States</p>

            <div className="my-9 text-lg text-gray-800">
              Web Producer - Web Specialist<br />
              Columbia University - New York
            </div>

            {/* Stats */}
            <div className="flex justify-around mt-6 text-gray-700">
              <div>
                <p className="text-lg font-semibold">65</p>
                <p className="text-xs">Friends</p>
              </div>
              <div>
                <p className="text-lg font-semibold">43</p>
                <p className="text-xs">Photos</p>
              </div>
              <div>
                <p className="text-lg font-semibold">21</p>
                <p className="text-xs">Comments</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-12 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserProfile