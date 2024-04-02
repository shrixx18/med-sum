"use client"
import React from 'react'
import Header from '@/components/Header'
import BannerCard from '@/components/BannerCard'
import AnswerFromPDF from '@/components/AnswerFromPDF'
import SummaryFromPDF from '@/components/summaryPdf'
import { ScrollAnimate } from '@/components/ScrollAnimate'
function Homee() {
  return (
    <div><div className=" bg-gradient-to-r from-blue-200 to-yellow-200 min-h-screen bg-cover items-center justify-center">
    <Header />
     <BannerCard />
     <AnswerFromPDF />
     <br />
     <ScrollAnimate />
     <br />
     <SummaryFromPDF />
     <br />
   </div></div>
  )
}

export default Homee