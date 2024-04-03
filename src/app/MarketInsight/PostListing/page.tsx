import React from 'react'
import { Metadata } from 'next';
import Layouts from '@/components/Layouts';

export const metadata: Metadata = {
    title: "Post Listing | ESAFX - BackOffice",
    description:
        "This is Post Listing page for ESAFX Back Office",
};

const PostListing = () => {
    return (
        <Layouts>
            <div className='bg-white h-auto w-full flex flex-col justify-center items-center px-5 my-5 rounded-xl shadow-xl text-black'>
                Post Listing
            </div>
        </Layouts>
    )
}

export default PostListing