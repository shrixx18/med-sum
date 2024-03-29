"use client"
import React from 'react'
import Header from '@/components/Header'
import FeaturesCard from '@/components/FeaturesCard'
import DocumentUploadWithOCR from '@/components/DocumentUploadWithOCR'
import BannerCard from '@/components/BannerCard'
import AnswerFromPDF from '@/components/AnswerFromPDF'
import SummaryFromPDF from '@/components/summaryPdf'
function Homee() {
  return (
    <div><div className=" bg-gradient-to-r from-blue-200 to-yellow-200 bg-cover items-center justify-center">
    <Header />
     <BannerCard />
     <AnswerFromPDF />
     <br />
     <SummaryFromPDF />
     <div className="container my-10 mx-auto py-3 ">
       
       <div className="md:flex justify-evenly">
       {/* <div className="md:w-1/2">
         <FeaturesCard />
       </div> */}
       <div className="md:w-1/2">
       <DocumentUploadWithOCR />
       
       
       </div>
       </div>
     </div>
   </div></div>
  )
}

export default Homee