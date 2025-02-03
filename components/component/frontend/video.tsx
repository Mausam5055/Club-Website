import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Video({
  className,
  ...props
}: {
  className?: string;
}) {

  return (
      <video
        autoPlay
        playsInline
        controls
        loop
        id="myVideo"
        className={cn("w-full h-full object-cover", className)}
        {...props}
      >
        <source src={"/video/Linpack.webm"} type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
  );
}
