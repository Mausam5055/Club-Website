import React from 'react'

export default function Googlemap() {
  return (
    <div className=''>
    <div className="overflow-hidden resize-none max-w-full w-[500px] h-[300px]">
      <div className="h-full w-full max-w-full">
        <iframe
          title="Google Map"
          className="h-full w-full border-0"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Vit+bhopal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        />
      </div>
      <a
        href="https://www.bootstrapskins.com/themes"
        className="text-blue-600 underline"
      >
        Premium Bootstrap Themes
      </a>
    </div>
    </div>
  )
}
