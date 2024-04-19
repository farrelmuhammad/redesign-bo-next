'use client'
import React, { useState } from 'react'
import Logo from '@/assets/images/Logo.png'
import { FaChartLine, FaChevronDown, FaChevronUp, FaCircle, FaEllipsisH, FaHistory, FaHome, FaRegCircle, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks'
import { selectViewState } from '@/lib/features/menu/menuSlice'
import menuData from '@/config/menuData.json'
import { MenuItem } from '@/config'
import { truncateText } from '@/config/helpers'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { IconType } from 'react-icons'

const Sidebar = () => {
    const menuViewState = useAppSelector(selectViewState);
    const [openSubMenus, setOpenSubMenus] = useState<Record<number, boolean>>({}); // State untuk mengelola submenu

    const toggleSubMenu = (itemId: number) => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    const iconMapMenuSidebar: { [key: string]: IconType } = {
        FaUser,
        FaHistory,
        FaChartLine,
        FaCircle,
        FaRegCircle,
        // Tambahkan ikon lain yang Anda butuhkan
    };

    const renderSidebarMenu = (menuData: MenuItem[]): React.ReactNode => {
        return menuData.map((item) => (
            <ol key={item.id} className='w-full py-2'>
                <div className="flex flex-row justify-start items-center gap-10 mb-2">
                    {!menuViewState.sidebarVisible ? (
                        <>
                            <div className='bg-[#A1ACB8] w-[6px] h-7'></div>
                            <span className='flex flex-col gap-2 w-full font-medium uppercase text-[#A1ACB8] text-sm'>{item.label}</span>
                        </>
                    ) : (
                        <div className="flex flex-row justify-center items-center w-full">
                            <FaEllipsisH />
                        </div>
                    )}
                </div>
                <ul className='flex flex-col px-8 w-full font-medium text-lg'>
                    {item.subMenuItems?.map((subItem) => {
                        const IconComponent = subItem.icon !== undefined ? iconMapMenuSidebar[subItem.icon] : FaRegCircle;
                        const isSubMenuOpen = openSubMenus[subItem.id] || false;
                        const chevronIcon = subItem.subMenuItems ? (isSubMenuOpen ? <FaChevronUp /> : <FaChevronDown />) : "";
                        return (
                            <li key={subItem.id} className='w-full'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className='w-full'>
                                            <button onClick={() => toggleSubMenu(subItem.id)} className={`flex flex-row ${subItem.subMenuItems ? 'justify-between' : 'justify-start'} w-full items-center gap-4 py-4 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]`}>
                                                <span className='flex flex-row justify-start items-center gap-4'>
                                                    {IconComponent ? <IconComponent style={{
                                                        height: '18px',
                                                        width: '18px'
                                                    }} /> : <FaRegCircle className="w-2 h-2" />}
                                                    <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>{subItem.label}</span>
                                                </span>
                                                {chevronIcon}
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent side="right">
                                            <p>{subItem.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                {subItem.subMenuItems && isSubMenuOpen ? (
                                    <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                        {subItem.subMenuItems?.map((subItems) => {
                                            const isChildSubMenuOpen = openSubMenus[subItems.id] || false;
                                            const chevronIcon = subItems.subMenuItems ? (isChildSubMenuOpen ? <FaChevronUp /> : <FaChevronDown />) : "";

                                            return (
                                                <li key={subItems.id} className='w-full'>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full'>
                                                                <button onClick={() => toggleSubMenu(subItems.id)} className='flex flex-row justify-between w-full items-center gap-4 py-2 px-4 capitalize hover:text-[#F9C017]'>
                                                                    <span className='flex flex-row justify-start items-center gap-4'>
                                                                        <FaCircle className='w-2 h-2' />
                                                                        <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>{subItems.label}</span>
                                                                    </span>
                                                                    {chevronIcon}
                                                                </button>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="right">
                                                                <p>{subItems.label}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    {subItems.subMenuItems && isChildSubMenuOpen ? (
                                                        <ul className='flex flex-col pl-5 w-full font-medium text-lg'>
                                                            {subItems.subMenuItems?.map((childSubItems) => {
                                                                return (
                                                                    <li key={childSubItems.id} className='w-full'>
                                                                        <TooltipProvider>
                                                                            <Tooltip>
                                                                                <TooltipTrigger className='w-full'>
                                                                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 capitalize hover:text-[#F9C017]'>
                                                                                        <span className='flex flex-row justify-start items-center gap-4 w-full'>
                                                                                            <FaRegCircle className='w-2 h-2' />
                                                                                            <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>{truncateText(childSubItems.label, 12)}</span>
                                                                                        </span>
                                                                                    </button>
                                                                                </TooltipTrigger>
                                                                                <TooltipContent side="right">
                                                                                    <p>{childSubItems.label}</p>
                                                                                </TooltipContent>
                                                                            </Tooltip>
                                                                        </TooltipProvider>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    ) : ""}

                                                </li>
                                            )
                                        })}
                                    </ul>
                                ) : ""}
                            </li>
                        )
                    })}
                </ul>
            </ol>
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
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className='w-full'>
                                    <button className='flex flex-row justify-start w-full items-center gap-4 py-4 px-4 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%] hover:text-[#F9C017]'>
                                        <FaHome /> <span className={`${!menuViewState.sidebarVisible ? 'relative' : 'hidden'}`}>Dashboard</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Dashboard</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                </ul>
                {renderSidebarMenu(menuData.menuItems)}
            </div>
        </aside>
    )
}

export default Sidebar