import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider';
const images = [
  { url: "medipic.jpg" },
  { url: "medipic1.jpg" },
  { url: "medipic2.jpg" },
  { url: "medipic3.jpg" },
]
export const ScrollAnimate = () => {
  return (
    <section className=" m-3 p-3 bg-white rounded-md w-auto h-auto shadow-md flex space-x-96 text-black">
     <div className=" flex-row-reverse">
     <SimpleImageSlider
        width={300}
        height={300}
        images={images}
        showBullets={false}
        showNavs={false}
        slideDuration={0.5}
        autoPlay={true}
      />
      </div>
      <div className=" font-semibold mb-3 my-2">
      Going to buy a mediclaim policy ? 
      <br />
       <span className=" font-bold">Ensure that it serves your specific purpose</span>
       <br />
       <ul>
       Get rid of : 
       <li>🔺Inadequate Coverage</li>
       <li>🔺Conditions of claim rejection</li>
       <li>🔺Policy Lapses</li>
       <li>🔺Financial Burden</li>
       </ul>
      </div>
      
    </section>
  )
}
