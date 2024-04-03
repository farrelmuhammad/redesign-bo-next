import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

type MyComponentProps = {
    children: React.ReactNode;
};

const Layouts = ({ children }: MyComponentProps) => {
    return (
        <main className="bg-[#F6F6F6] h-screen w-full flex font-poppins text-white">
            <Sidebar />
            <div className="flex flex-col w-full h-full px-10 overflow-auto">
                <Navbar />
                {children}
            </div>
        </main>
    )
}

export default Layouts