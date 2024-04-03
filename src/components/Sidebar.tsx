import React from 'react'
import Logo from '@/assets/images/Logo.png'
import { FaHome } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <aside className='flex flex-col h-full w-1/5 justify-start items-center bg-[#022D57] py-5'>
            <div className="flex flex-row h-20 justify-start gap-4 items-center">
                <Image
                    className='h-10 w-10'
                    src={Logo}
                    alt='Logo'
                />
                <h1 className='font-bold text-3xl text-[#F9C017]'>Admin Panel</h1>
            </div>
            <div className="flex flex-col h-full w-full justify-start gap-4 items-start py-5 px-16">
                <ul className='flex flex-col gap-2 w-full font-medium text-lg'>
                    <li className='w-full'>
                        <button className='flex flex-row justify-start w-full items-center gap-4 py-5 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                            <FaHome /> Dashboard
                        </button>
                    </li>
                    <li className='w-full'>
                        <Link href={`/MarketInsight/PostListing`} className='flex flex-row justify-start w-full items-center gap-4 py-5 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                            <FaHome /> Post Listing
                        </Link>
                    </li>
                </ul>
                <ul className='flex flex-col gap-2 w-full font-medium text-lg'>
                    <li className='w-full'>
                        <button className='flex flex-row justify-start w-full items-center gap-4 py-5 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                            <FaHome /> Dashboard
                        </button>
                    </li>
                    <li className='w-full'>
                        <button className='flex flex-row justify-start w-full items-center gap-4 py-5 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                            <FaHome /> Dashboard
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar