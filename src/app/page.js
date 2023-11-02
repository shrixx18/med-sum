"use client"
import Header from '@/components/Header'
import FeaturesCard from '@/components/FeaturesCard'
import DocumentUploadWithOCR from '@/components/DocumentUploadWithOCR'
import BannerCard from './BannerCard'
export default function Home() {

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

