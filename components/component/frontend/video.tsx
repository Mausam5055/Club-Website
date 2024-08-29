export function Video() {
    return (
      <video width="320" height="240" className="w-full h-full object-cover" controls preload="none">
        <source src="/video/linpack.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }