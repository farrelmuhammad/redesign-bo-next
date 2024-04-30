import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import Logo from '@/assets/images/Logo.png'

export const metadata: Metadata = {
  title: "Login | ESAFX - BackOffice",
  description:
    "This is Login page for ESAFX Back Office",
};

const Login = () => {
  return (
    <section className='flex justify-center items-center h-screen w-screen bg-[#e5eef6]'>
      <div className="bg-white h-auto w-auto flex flex-col justify-center items-center px-20 py-8 my-5 rounded-2xl shadow-xl text-black">
        <div className="flex flex-row h-20 justify-start gap-4 items-center my-3">
          <div className="flex justify-center items-center rounded-full bg-[#022D57] h-14 w-14">
            <Image
              className='h-10 w-10'
              src={Logo}
              alt='Logo'
            />
          </div>
          <h1 className={`font-bold text-2xl text-[#022D57]`}>Admin Panel</h1>
        </div>

        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="font-medium text-[#246EA6] text-xl">Login</h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 my-2">
          <label className='text-black'>Username</label>
          <input
            className="border-[1px] border-gray-400 rounded-xl w-96 h-12 px-5"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-4 my-2">
          <label className='text-black'>Password</label>
          <input
            className="border-[1px] border-gray-400 rounded-xl w-96 h-12 px-5"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 my-10">
          <button
            className="bg-[#246EA6] rounded-3xl w-96 h-12 text-white"
          >
            Login
          </button>
          <button
            className="text-black underline font-light"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login