import React from "react";
import Carousel from "./carousel";

const cardsData = [
  {
    id: 1,
    title: "SIGNAL PROCESSING",
    description: "Animating Wildlife Movement Data for Researchers, Conservationists, and Urban Planners Open-Source App Accelerates New Environmental Discoveries",
    imageUrl: "/images/animal.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/open-source-app-tracks-and-maps-animal-movement-data.html"
  },
  {
    id: 2,
    title: "IMAGE PROCESSING",
    description: "Single-Photon Camera Enables Video Playback at Any Timescale Extreme Data Acquisition Illuminates New Computer Vision Applications",
    imageUrl: "/images/image2.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/single-photon-camera-enables-extreme-data-acquisition-for-computer-vision-applications.html"
  },
  {
    id: 3,
    title: "ROBOTICS",
    description: "A Platoon of Green Autonomous Vehicles on Railroad Tracks Battery-Powered Rail Cars Move Freight Cleaner, Faster, and Safer",
    imageUrl: "/images/image3.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/autonomous-battery-powered-electric-vehicles-on-railroad-tracks-move-freight.html"
  },
  {
    id: 4,
    title: "AI / CONTROL SYSTEMS",
    description: "Designing Smarter Electrical Equipment Embedded with AI Combining Model-Based Design with AI in Electrical Systems Improves Industry Operations",
    imageUrl: "/images/image4.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/model-based-design-and-code-generation-embed-ai-powered-predictive-maintenance-algorithms-in-electrical-systems.html"
  },
  {
    id: 5,
    title: "GREEN TECHNOLOGY/CONTROL SYSTEMS",
    description: "This Clean Power Source Is Helping Fuel the Future of Transportation Overcoming Challenges of Hydrogen Fuel Cell Development with Model-Based Design",
    imageUrl: "/images/water.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/hydrogen-fuel-cell-development-brings-clean-power-to-transportation.html"
  },
  {
    id: 6,
    title: "ACADEMIA",
    description: "Cloud-Based Docker Containers Forge Career-Ready Engineering Skills Students Focus on Mathematical Modeling Instead of Software Setup",
    imageUrl: "/images/image5.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/cloud-based-docker-containers-help-mit-students-with-mathematical-modeling.html"
  },
  {
    id: 7,
    title: "ROBOTICS",
    description: "Deep Learning–Based Motion Capture System Helps Study Cheetahs in the Wild Understanding Cheetahs’ Amazing Maneuverability Through Robotic Research",
    imageUrl: "/images/cheetah.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/deep-learning-motion-capture-system-helps-design-cheetah-inspired-robots.html"
  },
  {
    id: 8,
    title: "AI",
    description: "Fighting Crop Diseases with AI and Internet of Things IoT Sensors Help Boost Maize Production in Africa",
    imageUrl: "/images/image8.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/ai-and-iot-sensors-spot-diseases-and-boost-crop-production.html"
  },
  {
    id: 9,
    title: "GREEN TECHNOLOGY",
    description: "Clean Technologies Power Electric Three-Wheelers Last-Mile Delivery EVs Made in India, for India",
    imageUrl: "/images/image9.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/clean-technologies-power-electric-three-wheelers-for-last-mile-delivery.html"
  },
  {
    id: 10,
    title: "BIOTECH / MEDICAL DEVICES",
    description: "Deep Learning Decodes Brain Signals to Identify ADHD Using Math to Model Brain Activity",
    imageUrl: "/images/image10.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/deep-learning-decodes-brain-signals-to-identify-adhd.html"
  },
  {
    id: 11,
    title: "BIOTECH",
    description: "Biomedically Engineered Spinach Transforms Lab-Grown Meat Tissue Research Is Advancing Cellular Agriculture",
    imageUrl: "/images/image11.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/biomedically-engineered-spinach-transforms-lab-grown-meat.html"
  },
  {
    id: 12,
    title: "AI / Academia",
    description: "When Order Hides in Plain Sight Complexity Looks Chaotic but Is Actually Quite Controllable",
    imageUrl: "/images/image12.jpg",
    link:"https://in.mathworks.com/company/mathworks-stories/controlling-order-and-complexity-science.html"
  },
];

export default function CaruselUsage() {
  return (
    <div className="py-8 px-4" id="aboutus">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Latest Research & Development</h2>
        <p className="text-gray-600 dark:text-gray-300">Explore cutting-edge developments in various fields</p>
      </div>
      <Carousel cards={cardsData} />
    </div>
  );
}
