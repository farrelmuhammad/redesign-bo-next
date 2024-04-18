'use client'
import React from 'react'
import Logo from '@/assets/images/Logo.png'
import { FaChartLine, FaChevronDown, FaCircle, FaEllipsisH, FaHistory, FaHome, FaRegCircle, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks'
import { selectViewState } from '@/lib/features/menu/menuSlice'
import menuData from '@/config/menuData.json'
import { MenuItem } from '@/config'

const Sidebar = () => {
    const menuViewState = useAppSelector(selectViewState);

    const iconMap = {
        FaHome,
        FaUser,
        FaHistory,
        FaChartLine,
        FaChevronDown,
        FaCircle,
        FaRegCircle,
        // Tambahkan ikon lain yang Anda butuhkan
    };

    const renderSidebarMenu = (menuData: MenuItem[]): React.ReactNode => {
        return menuData.map((item, index) => (
            <>
                <ol className='w-full py-2'>
                    <div className="flex flex-row justify-start items-center gap-10 mb-2">
                        {!menuViewState.sidebarVisible ? (
                            <>
                                <div className='bg-[#A1ACB8] w-[6px] h-7'></div>
                                <span className='flex flex-col gap-2 w-full font-medium uppercase text-[#A1ACB8] text-sm'>{item.label}</span>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row justify-center items-center w-full">
                                    <FaEllipsisH />
                                </div>
                            </>
                        )}
                    </div>
                    <ul className='flex flex-col px-8 w-full font-medium text-lg'>
                        {item.subMenuItems?.map((subItem, index) => {
                            const IconComponent = iconMap[subItem?.icon] || FaRegCircle;
                            return (
                                <li className='w-full'>
                                    <button className='flex flex-row justify-between w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {IconComponent ? <IconComponent className="w-2 h-2" /> : <FaRegCircle className="w-2 h-2" />}
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>{subItem.label}</span>
                                        </span>
                                        {subItem.subMenuItems ? (
                                            <FaChevronDown />
                                        ) : ""}
                                    </button>
                                </li>
                            )
                        })}
                        <li className='w-full'>
                            <button className='flex flex-row justify-between w-full items-center gap-4 py-4 px-4 capitalize hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                                <span className='flex flex-row justify-start items-center gap-4'>
                                    <FaChartLine /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>Market Insight</span>
                                </span>
                                <FaChevronDown />
                            </button>
                            <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-between w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>post</span>
                                        </span>
                                        <FaChevronDown />
                                    </button>
                                    <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                        <li className='w-full'>
                                            <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                                <FaRegCircle className="w-2 h-2" />
                                                {/* <FaCircle className='w-2 h-2' /> */}
                                                <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>listing</span>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>categories</span>
                                        </span>
                                    </button>
                                </li>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>tags</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ol>
            </>
        ));
    };

    return (
        <aside className={`flex flex-col h-full ${!menuViewState.sidebarVisible ? 'w-1/5' : 'w-28'} justify-start items-center bg-[#022D57] transition-all duration-300`}>
            <div className="flex flex-row h-20 justify-start gap-4 items-center mb-3">
                <Image
                    className='h-10 w-10'
                    src={Logo}
                    alt='Logo'
                />
                <h1 className={`font-bold text-3xl text-[#F9C017] ${!menuViewState.sidebarVisible ? 'relative' : 'hidden'} transition-all duration-300`}>Admin Panel</h1>
            </div>
            <div className="flex flex-col w-full justify-start gap-4 items-start overflow-y-auto">
                <ul className='flex flex-col px-8 w-full font-medium text-lg'>
                    <li className='w-full'>
                        <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                            <FaHome /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>Dashboard</span>
                        </button>
                    </li>
                </ul>
                {renderSidebarMenu(menuData.menuItems)}

                <ol className='w-full py-2'>
                    <div className="flex flex-row justify-start items-center gap-10 mb-2">
                        {!menuViewState.sidebarVisible ? (
                            <>
                                <div className='bg-[#A1ACB8] w-[6px] h-7'></div>
                                <span className='flex flex-col gap-2 w-full uppercase font-medium text-[#A1ACB8] text-sm'>User</span>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row justify-center items-center w-full">
                                    <FaEllipsisH />
                                </div>
                            </>
                        )}
                    </div>
                    <ul className='flex flex-col px-8 w-full font-medium text-lg'>
                        <li className='w-full'>
                            <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                                <FaUser /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>user listing</span>
                            </button>
                        </li>
                        <li className='w-full'>
                            <Link href={`/MarketInsight/PostListing`} className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                                <FaHistory /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>user log</span>
                            </Link>
                        </li>
                    </ul>
                </ol>
                <ol className='w-full py-2'>
                    <div className="flex flex-row justify-start items-center gap-10 mb-2">
                        {!menuViewState.sidebarVisible ? (
                            <>
                                <div className='bg-[#A1ACB8] w-[6px] h-7'></div>
                                <span className='flex flex-col gap-2 w-full font-medium uppercase text-[#A1ACB8] text-sm'>research</span>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row justify-center items-center w-full">
                                    <FaEllipsisH />
                                </div>
                            </>
                        )}
                    </div>
                    <ul className='flex flex-col px-8 w-full font-medium text-lg'>
                        <li className='w-full'>
                            <button className='flex flex-row justify-between w-full items-center gap-4 py-4 px-4 capitalize hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                                <span className='flex flex-row justify-start items-center gap-4'>
                                    <FaChartLine /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>Market Insight</span>
                                </span>
                                <FaChevronDown />
                            </button>
                            <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-between w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>post</span>
                                        </span>
                                        <FaChevronDown />
                                    </button>
                                    <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                        <li className='w-full'>
                                            <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                                <FaRegCircle className="w-2 h-2" />
                                                {/* <FaCircle className='w-2 h-2' /> */}
                                                <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>listing</span>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>categories</span>
                                        </span>
                                    </button>
                                </li>
                                <li className='w-full'>
                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                        <span className='flex flex-row justify-start items-center gap-4'>
                                            {/* <FaRegCircle className="w-2 h-2" /> */}
                                            <FaCircle className='w-2 h-2' />
                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>tags</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ol>
            </div>
        </aside>
    )
}

export default Sidebar