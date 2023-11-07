"use client"
import { useState,useEffect } from 'react'
import Header from '@/components/Header'
import FeaturesCard from '@/components/FeaturesCard'
import DocumentUploadWithOCR from '@/components/DocumentUploadWithOCR'
import BannerCard from '@/components/BannerCard'
import { account, ID } from "./appwrite/auth";
import LoginPage from './login'
export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    
    const checkLoggedInUser = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user);
      } catch (error) {
        
        setLoggedInUser(null);
      }
    };
    checkLoggedInUser();
  }, []);

  if (!loggedInUser) {
    return <LoginPage />;
  }

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
  )
}

