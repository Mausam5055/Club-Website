// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';
// import { EffectCube, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import { useState } from 'react';

// const OverleafTutorial = () => {
//     const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);
//     const [showVideo, setShowVideo] = useState(false);
  
//     const handleImageClick = (url: string) => {
//       setVideoUrl(url);
//       setShowVideo(true);
//     };
  
//     const handleCloseVideo = () => {
//       setShowVideo(false);
//       setVideoUrl(undefined);
//     };
//     return  (
//       <div className="flex w-full h-full relative" id="overleaf">
//         {showVideo && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//             <button onClick={handleCloseVideo} className="absolute top-4 right-4 text-white">
//               Close
//             </button>
//             <iframe
//               width="80%"
//               height="80%"
//               src={videoUrl}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="z-50"
//             ></iframe>
//           </div>
//         )}
//         <Swiper
//           effect={'cube'}
//           grabCursor={true}
//           cubeEffect={{
//             shadow: true,
//             slideShadows: true,
//             shadowOffset: 20,
//             shadowScale: 0.94,
//           }}
//           pagination={true}
//           modules={[EffectCube, Pagination]}
//           className="mySwiper w-full h-full"
//         >
//           <SwiperSlide onClick={() => handleImageClick('./video/Electricvehicle.mp4')}>
//             <Image
//               width={1800}
//               height={1800}
//               src={"/images/tutorial2.jpg"}
//               alt="tutorial1"
//               className="object-fill w-full h-full"
//             />
//           </SwiperSlide>
//           <SwiperSlide onClick={() => handleImageClick('https://drive.google.com/file/d/119rE9ExmX_sP38s4W0_LHhWFUXm3JZYG/view?usp=sharing')}>
//             <Image
//               width={1800}
//               height={1800}
//               src={"/images/tutorial2.jpg"}
//               alt="tutorial2"
//               className="object-fill w-full h-full"
//             />
//           </SwiperSlide>
//           <SwiperSlide onClick={() => handleImageClick('https://www.youtube.com/embed/videoid3')}>
//             <Image
//               width={1800}
//               height={1800}
//               src={"/images/tutorial3.jpg"}
//               alt="tutorial3"
//               className="object-fill w-full h-full"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     );
//   };

// export default OverleafTutorial
import React from 'react'

export default function OverleafTutorial() {
  return (
    <div>
      <h1>Overleaf Tutorial</h1>
    </div>
  )
}

