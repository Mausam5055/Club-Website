import React from "react";
import Carousel from "./carousel";

const cardsData = [
  {
    id: 1,
    title: "SIGNAL PROCESSING",
    description: "Animating Wildlife Movement Data for Researchers, Conservationists, and Urban Planners Open-Source App Accelerates New Environmental Discoveries",
    imageUrl: "/images/animal.jpg",
  },
  {
    id: 2,
    title: "IMAGE PROCESSING",
    description: "Single-Photon Camera Enables Video Playback at Any Timescale Extreme Data Acquisition Illuminates New Computer Vision Applications",
    imageUrl: "/images/image2.jpg",
  },
  {
    id: 3,
    title: "ROBOTICS",
    description: "A Platoon of Green Autonomous Vehicles on Railroad Tracks Battery-Powered Rail Cars Move Freight Cleaner, Faster, and Safer",
    imageUrl: "/images/image3.jpg",
  },
  {
    id: 4,
    title: "AI / CONTROL SYSTEMS",
    description: "Designing Smarter Electrical Equipment Embedded with AI Combining Model-Based Design with AI in Electrical Systems Improves Industry Operations",
    imageUrl: "/images/image4.jpg",
  },
  {
    id: 5,
    title: "GREEN TECHNOLOGY/CONTROL SYSTEMS",
    description: "This Clean Power Source Is Helping Fuel the Future of Transportation Overcoming Challenges of Hydrogen Fuel Cell Development with Model-Based Design",
    imageUrl: "/images/water.jpg",
  },
  {
    id: 6,
    title: "ACADEMIA",
    description: "Cloud-Based Docker Containers Forge Career-Ready Engineering Skills Students Focus on Mathematical Modeling Instead of Software Setup",
    imageUrl: "/images/image5.jpg",
  },
  {
    id: 7,
    title: "ROBOTICS",
    description: "Deep Learning–Based Motion Capture System Helps Study Cheetahs in the Wild Understanding Cheetahs’ Amazing Maneuverability Through Robotic Research",
    imageUrl: "/images/cheetah.jpg",
  },
  {
    id: 8,
    title: "AI",
    description: "Fighting Crop Diseases with AI and Internet of Things IoT Sensors Help Boost Maize Production in Africa",
    imageUrl: "/images/image8.jpg",
  },
  {
    id: 9,
    title: "GREEN TECHNOLOGY",
    description: "Clean Technologies Power Electric Three-Wheelers Last-Mile Delivery EVs Made in India, for India",
    imageUrl: "/images/image9.jpg",
  },
  {
    id: 10,
    title: "BIOTECH / MEDICAL DEVICES",
    description: "Deep Learning Decodes Brain Signals to Identify ADHD Using Math to Model Brain Activity",
    imageUrl: "/images/image10.jpg",
  },
  {
    id: 11,
    title: "BIOTECH",
    description: "Biomedically Engineered Spinach Transforms Lab-Grown Meat Tissue Research Is Advancing Cellular Agriculture",
    imageUrl: "/images/image11.jpg",
  },
  {
    id: 12,
    title: "AI / Academia",
    description: "When Order Hides in Plain Sight Complexity Looks Chaotic but Is Actually Quite Controllable",
    imageUrl: "/images/image12.jpg",
  },
];

export default function CaruselUsage() {
  return (
    <div className="">
      <Carousel cards={cardsData} />
    </div>
  );
}
