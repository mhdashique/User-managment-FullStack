import React, { useState } from 'react'

const SIGN_UP = "Sign Up"
const LOG_IN = "Log In"

const Login = () => {
  const [signState, setSignState] = useState(LOG_IN)
  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-cyan-800 p-8 rounded-xl shadow-md w-130 flex flex-col gap-6">
          
          <h1 className="text-2xl font-bold text-center text-white mb-10">{signState.toUpperCase()}</h1>

          {signState === SIGN_UP ? <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            type="text"
            placeholder="Username"
          /> : <></>}

          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            type="email" 
            placeholder="Email"
          />

          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            type="password"
            placeholder="Password"
          />

          <button className="bg-white text-black rounded-md w-full h-11 font-bold hover:bg-amber-100 transition">
            {signState.toUpperCase()}
          </button>

          {signState === LOG_IN ?
          <p className="text-sm text-center text-white cursor-pointer">Don't have an account?<span className="text-amber-600 hover:underline ml-1" onClick={()=>{setSignState(SIGN_UP)}}>{SIGN_UP}</span></p>
          :<p className="text-sm text-center text-white cursor-pointer">Already have account? <span className="text-amber-600 hover:underline ml-1" onClick={()=>{setSignState(LOG_IN)}}>{LOG_IN}</span></p>
          }
        
        </div>
      </div>
      
    </>
  )
}

export default Login