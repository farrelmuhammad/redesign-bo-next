import React from 'react'
import { Metadata } from 'next';
import Layouts from '@/components/Layouts';
import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { FaCheck, FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { BreadCrumb } from '@/components/BreadCrumb';

export const metadata: Metadata = {
    title: "Post Listing | ESAFX - BackOffice",
    description:
        "This is Post Listing page for ESAFX Back Office",
};

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
]

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]


const PostListing = () => {
    return (
        <Layouts>
            <div className="flex flex-row justify-between items-start text-black px-2 mt-5">
                <h1 className='text-2xl font-bold'>Market Insight Listing</h1>
                <BreadCrumb />
            </div>

            <div className='bg-white h-auto w-full flex flex-row justify-start items-start px-5 my-5 rounded-xl shadow-xl text-black'>
                <div className="flex flex-col justify-start items-start my-10 mx-5">
                    <span>Title</span>
                    <Input type='text' placeholder='title' />
                </div>
                <div className="flex flex-col justify-start items-start my-10 mx-5">
                    <span>Title</span>
                    <Input type='text' placeholder='title' />
                </div>
                <div className="flex flex-col justify-start items-start my-10 mx-5">
                    <span>Title</span>
                    <Input type='text' placeholder='title' />
                </div>
                <button className='flex flex-row justify-center items-center my-10 mx-5 gap-5 rounded-full bg-[#246EA6] p-[2px] h-12 w-36 text-white hover:bg-[#2467a6]'><FaSearch /> Search</button>
            </div>

            <div className="flex flex-row justify-between items-start text-black">
                <div className="flex flex-row justify-start items-start gap-2">
                    <button className='flex flex-row justify-center items-center gap-3 rounded-full bg-[#ffff] h-12 w-40 text-black hover:bg-[#2467a6]'>Bulk Actions</button>
                    <button className='flex flex-row justify-center items-center gap-3 rounded-full bg-[#246EA6] h-12 w-36 text-white hover:bg-[#2467a6]'><FaCheck /> Apply</button>
                </div>
                <button className='flex flex-row justify-center items-center py-2 mx-5 gap-5 rounded-full bg-[#246EA6] h-12 w-36 text-white hover:bg-[#2467a6]'><FaPlus /> Add Post</button>
            </div>

            <div className='bg-white h-auto w-full flex flex-col justify-center items-center px-5 my-5 rounded-xl shadow-xl text-black'>
                <DataTable />
            </div>
        </Layouts>
    )
}

export default PostListing