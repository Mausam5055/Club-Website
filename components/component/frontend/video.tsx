import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Video({
  className,
  ...props
}: {
  className?: string;
}) {
  const [muted, setMuted] = useState(true);

  return (
      <video
        autoPlay
        playsInline
        muted={muted}
        loop
        id="myVideo"
        className={cn("w-full h-full object-cover", className)}
        {...props}
      >
        <source src={"/video/Linpack.mp4"} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
  );
}
