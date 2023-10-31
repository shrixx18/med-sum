"use client"
import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import FeaturesCard from '@/components/FeaturesCard'
import DocumentUpload from '@/components/DocumentUpload'
export default function Home() {
  // const [uploadedDocument, setUploadedDocument] = useState(null);

  // const handleDocumentUpload = (documentBuffer) => {
    
  //   setUploadedDocument(documentBuffer);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 min-h-screen flex items-center justify-center">
     <Header />
      
      <div className="container mx-auto">
        <div className="md:flex">
          <FeaturesCard />
          <DocumentUpload />
        </div>
        
      </div>
    </div>
  )
}

