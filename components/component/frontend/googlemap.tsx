import React from 'react'

interface GooglemapProps {
  loading?: "lazy" | "eager";
}

const Googlemap: React.FC<GooglemapProps> = ({ loading = 'lazy' }) => {
  return (
    <div className='loading-lazy'>
      <div className="overflow-hidden resize-none max-w-full w-[500px] h-[300px]">
        <div className="h-full w-full max-w-full">
          <iframe
            title="Google Map"
            className="h-full w-full border-0"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Vit+bhopal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading={loading} // Implement lazy loading here
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

export default Googlemap;
