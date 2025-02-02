export function Video() {
  return (
    <video
      width="320"
      height="240"
      className="w-full h-full object-cover"
      controls
      preload="auto"
      playsInline
    >
      <source src="/video/Linpack.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}