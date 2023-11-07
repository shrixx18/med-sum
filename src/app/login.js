"use client";
import { useState } from "react";
import { account, ID } from "./appwrite/auth";
import Header from '@/components/Header'
import FeaturesCard from '@/components/FeaturesCard'
import DocumentUploadWithOCR from '@/components/DocumentUploadWithOCR'
import BannerCard from '@/components/BannerCard'

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email, password) => {
    const session = await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-yellow-200 max-h-full items-center justify-center">
         <Header />   
        <BannerCard />
        <div className="container my-10 mx-auto py-8">
            <div className="md:flex justify-evenly">
            <div className="md:w-1/2">
            <FeaturesCard />
            </div>
            <div className="md:w-1/2">
            <DocumentUploadWithOCR />
            </div>
            </div>
        </div>
   </div>
    );
  }

  return (
 
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-yellow-200">
     <Header />
      <div className="w-96 p-4 bg-white rounded-lg shadow-md">
        {loggedInUser ? (
            <div className="bg-gradient-to-r from-blue-200 to-yellow-200 max-h-full items-center justify-center">
            
            <BannerCard />
            <div className="container my-10 mx-auto py-8">
                <div className="md:flex justify-evenly">
                <div className="md:w-1/2">
                <FeaturesCard />
                </div>
                <div className="md:w-1/2">
                <DocumentUploadWithOCR />
                </div>
                </div>
            </div>
       </div>
        ) : (
          <div>
            <p>Not logged in</p>
            <form className=" text-black">
            <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 mt-2"
              />
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 mt-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 mt-2"
              />
              
              <button
                type="button"
                onClick={() => login(email, password)}
                className="bg-blue-500 text-white rounded p-2 m-2"
              >
                Login
              </button>
              <button
                type="button"
                onClick={register}
                className="bg-green-500 text-white rounded p-2 m-2"
              >
               New user Register here 
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
   
  );
};

export default LoginPage;
