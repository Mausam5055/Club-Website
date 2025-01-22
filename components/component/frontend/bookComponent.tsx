"use client";
import HTMLFlipBook from "react-pageflip";

const BookComponent = () => {
  return (
      <HTMLFlipBook
        width={300}
        height={500}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="m-3 p-4"
        style={{}}
        startPage={0}
        size="fixed"
        drawShadow={true}
        flippingTime={1000}
        useMouseEvents={true}
        swipeDistance={30}
        clickEventForward={true}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        renderOnlyPageLengthChange={false}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* Page 1 - Event Overview */}
        <div className="bg-white ">
          <h1 className="text-lg font-bold text-center">Event Overview</h1>
          <p className="text-justify text-sm leading-relaxed">
            <strong>The Linpack Club</strong> hosted its highly anticipated
            inaugural event, drawing attention from students and faculty alike. The
            event, titled{" "}
            <em>
              &quot;Embarking on the Basics of MATLAB: A Primer to Unlocking Its
              Potential,&quot;
            </em>{" "}
            was designed to introduce attendees to the fundamental concepts of
            MATLAB, a powerful tool widely used in engineering and scientific
            computations.
          </p>
          <ul className="text-justify text-sm list-disc list-inside">
            <li>
              The event provided a platform for participants to immerse themselves
              in a hands-on learning experience. By focusing on the basics of
              MATLAB, the workshop aimed to lay a strong foundation for further
              exploration and mastery of the software.
            </li>
            <li>
              The workshop was structured to promote active engagement through a
              series of practical sessions and quizzes. Participants were
              encouraged to apply the concepts they learned in real-time,
              fostering a deeper understanding of the material.
            </li>
            <li>
              The collaborative environment fostered a sense of community among
              attendees, making it an ideal setting for exchanging ideas and
              knowledge.
            </li>
          </ul>
        </div>

        {/* Page 2 - Guest Lecture */}
        <div className="bg-white">
          <h1 className="text-lg font-bold text-center">Guest Lecture</h1>
          <p className="text-justify text-sm leading-relaxed">
            The event featured a distinguished guest lecture by{" "}
            <strong>Dr. Hari Niranjan</strong>, a renowned professor at Vellore
            Institute of Technology, Tamil Nadu, India. Dr. Niranjan, known for his
            expertise in computational techniques and MATLAB, delivered a talk that
            captivated the audience.
          </p>
          <ul className="text-justify text-sm list-disc list-inside">
            <li>
              Dr. Niranjan highlighted the versatility of MATLAB, providing
              real-world examples and applications in data analysis, simulation, and
              algorithm development.
            </li>
            <li>
              Attendees engaged in an interactive Q&A session, gaining insights into
              advanced MATLAB features and best practices.
            </li>
            <li>
              The lecture not only enhanced the learning experience but also inspired
              participants to explore the potential of computational tools in their
              respective fields.
            </li>
          </ul>
        </div>
      </HTMLFlipBook>
  );
};

export default BookComponent;
