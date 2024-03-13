// "use client"
// import Home from './Home/page'
// import { useState,useEffect } from 'react'
// import { account } from "../../appwrite/config";
// import LoginPage from '../login'
// export default function Main() {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
    
//     const checkLoggedInUser = async () => {
//       try {
//         const user = await account.get();
//         setLoggedInUser(user);
//       } catch (error) {
        
//         setLoggedInUser(null);
//       }
//     };
//     checkLoggedInUser();
//   }, []);

//   if (!loggedInUser) {
//     return <LoginPage />;
//   }

//   return (
//     <>
//       <Home />
//     </>
//   )
// }
"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import Login from "@/components/Login";
import Homee from "./Home/page";
const Home = () => {
const {authStatus} = useAuth();
return (
    <div className=" bg-gradient-to-r from-blue-200 to-yellow-200 w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap -mx-2 mt-32 gap-y-8">
            <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
                <div className="relative text-center w-full flex justify-center flex-wrap">
                    <div className="w-full max-w-[100px]">
                        {/* <img src="/favicon.ico" alt="Logo" /> */}
                    </div>
                    <div className="w-full">
                        <h1 className="font-bold text-3xl mb-4 text-black">
                            AI based  <span className="text-primary">mediclaim summarizer</span>
                        </h1>
                        <p className="text-black/60">
                            Get an accurate and precise summary of your mediclaim policy's terms and condition
                            powered by <span className=" text-green-500">DistillBERT model</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
                {authStatus ? (
                    <div className="max-w-md">
                        <Homee />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
        </div>
    </div>
);
}

export default Home;
