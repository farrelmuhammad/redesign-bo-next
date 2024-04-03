import Layouts from "@/components/Layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ESAFX - BackOffice",
  description:
    "This is Home page for ESAFX Back Office",
};

export default function Home() {
  return (
    <Layouts>
      <div className="flex justify-center items-center px-5 my-5 h-full w-full">
        <h1 className="font-bold text-black">Home</h1>
      </div>
    </Layouts>
    // <div className='bg-white h-auto w-full flex flex-col justify-center items-center px-5 my-5 rounded-xl shadow-xl text-black'>
    //   Post Listing
    // </div>
  );
}
