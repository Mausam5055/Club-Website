import { cn } from "@/lib/utils";
export default function Video({
  className,
  ...props
}: {
  className?: string;
}) {

  return (
      <video
        crossOrigin="anonymous"
        autoPlay
        playsInline
        loop
        muted
        id="myVideo"
        className={cn("w-full h-full object-cover", className)}
        {...props}
      >
        <source src="/video/Linpack.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
  );
}