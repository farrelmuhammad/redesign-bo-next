'use client'
import { MenuViewState, selectViewState, setViewDropdownNotifications, setViewDropdownUser, setViewToggleSidebar } from '@/lib/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import notifications from '@/config/notifications.json'
import React from 'react'
import { FaBars, FaEllipsisH, FaRegBell, FaRegEnvelopeOpen, FaRegUserCircle, FaSun } from 'react-icons/fa'

const Navbar = () => {
    const dispatch = useAppDispatch();
    const menuViewState = useAppSelector(selectViewState);

    return (
        <nav className='bg-white h-16 w-full flex flex-row justify-between items-center px-5 py-5 mt-5 rounded-xl shadow-lg'>
            <div className="flex flex-1 justify-start items-center">
                <button
                    onClick={() => {
                        dispatch(setViewToggleSidebar());
                    }}
                    className='text-xl text-gray-700 hover:text-black'>
                    <FaBars />
                </button>
            </div>
            <div className="relative flex flex-1 flex-row gap-3 justify-end items-end">
                <button
                    onClick={() => {
                        dispatch(setViewDropdownNotifications());
                    }}
                    className={`relative flex justify-center items-center h-10 w-10 text-[#868686] bg-[#F8F8F8] rounded-xl border-[2px]  ${!menuViewState.dropdownNotifications ? 'border-[#DDDDDD]' : 'border-gray-500'} hover:border-gray-500 hover:text-gray-500`}>
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5959] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5959]"></span>
                    </span>
                    <FaRegBell />
                </button>
                <button className='relative flex justify-center items-center h-10 w-10 text-[#868686] bg-[#F8F8F8] rounded-xl border-[2px] border-[#DDDDDD] hover:border-gray-500 hover:text-gray-500'>
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6992D0] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6992D0]"></span>
                    </span>
                    <FaRegEnvelopeOpen />
                </button>
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[2px] border-[#DDDDDD] bg-[#F8F8F8] text-yellow-400 hover:border-gray-500 hover:text-yellow-500'>
                    <FaSun />
                    {/* <FaMoon /> */}
                </button>
                <button onClick={() => {
                    dispatch(setViewDropdownUser());
                }} className={`flex flex-row justify-center items-center py-2 px-3 gap-3 text-[#022D57] ${!menuViewState.dropdownUserVisible ? '' : 'bg-gray-100 rounded-xl'} hover:text-[#1e183a] hover:bg-gray-100 hover:rounded-xl`}>
                    John Johnson <FaRegUserCircle className='text-xl' /> <FaEllipsisH className='rotate-90' />
                </button>

                {/* <Link href={`/Login`}>
                </Link> */}

                <DropdownUser menuViewState={menuViewState} />
                <DropdownNotifications menuViewState={menuViewState} />
            </div>
        </nav>
    )
}

const DropdownUser = ({ menuViewState }: { menuViewState: MenuViewState }) => {
    return (
        <div className={`z-10 right-3 top-16 ${!menuViewState.dropdownUserVisible ? 'hidden' : 'absolute'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="flex flex-col justify-start items-start w-full py-2 text-sm text-gray-700 dark:text-gray-200">
                <li className='w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    <button className="block px-4 py-2 ">Settings</button>
                </li>
                <li className='w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    <button className="block px-4 py-2 ">Earnings</button>
                </li>
                <li className='w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    <button className="block px-4 py-2 ">Sign out</button>
                </li>
            </ul>
        </div>
    );
}

const DropdownNotifications = ({ menuViewState }: { menuViewState: MenuViewState }) => {
    return (
        <div className={`z-10 right-48 top-16 ${!menuViewState.dropdownNotifications ? 'hidden' : 'absolute'} h-64 overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-64 text-black dark:bg-gray-700`}>
            <ul className='flex flex-col justify-start items-start w-full py-2 text-sm text-gray-700'>
                {
                    notifications.data.map((data) => {
                        return (
                            <li key={data.id} className={`relative w-full px-4 py-2 ${!data.read ? "" : "bg-gray-100"} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>
                                <span>{data.message}</span>
                                {!data.read && <span className="absolute top-0 right-0 flex h-3 w-3">
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5959]"></span>
                                </span>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Navbar