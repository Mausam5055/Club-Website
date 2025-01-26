"use client";
import HTMLFlipBook from 'react-pageflip';

interface MyBookProps {}

export default function MyBook(props: MyBookProps) {
  return (
    <HTMLFlipBook width={300} height={500} className="" style={{}} startPage={0} size="fixed" minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={1000} usePortrait={true} startZIndex={0} autoSize={true} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true} clickEventForward={true} useMouseEvents={true} swipeDistance={30} showPageCorners={true} disableFlipByClick={false}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}