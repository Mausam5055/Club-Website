import React from 'react'

interface GooglemapProps {
  loading?: "lazy" | "eager";
}

const Googlemap: React.FC<GooglemapProps> = ({ loading = 'lazy' }) => {
  return (
    <div className='w-full h-full'>
      <iframe
        title="VIT Bhopal University - Linpack Club Location"
        className="w-full h-full border-0"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=VIT+Bhopal+University,+Kotri+Kalan,+Ashta,+Sehore,+Madhya+Pradesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=15&maptype=roadmap"
        allowFullScreen
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Googlemap;