"use client"
import React from 'react';
import Link from 'next/link';
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
function Header({loggedInUser,onLogout }) {
  
  return (
    <header className=" bg-green-500 shadow-md p-2 md:p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">Mediclaim Summarizer</div>
        <div className="">
         <Link
                            href={"/logout"}
                            className=" bg-blue-500 mx-3 rounded-xl px-6 py-3 inline-block hover:bg-black duration-150"
                        >
                            Logout
                        </Link>
            <Link href="/about" className="hover:text-blue-500 text-black">About Us</Link>
       
        </div>
      </div>
    </header>
  );
}

export default Header;