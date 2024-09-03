"use client"
import React, { useState } from 'react';
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import "./flipping.css";

const BookComponent = () => {
    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 2));
    };

    return (
        <div className="flex flex-col items-center">
    <div className="pages h-[68vh] w-[48vw]">
        <FlippingPages
            direction="right-to-left"
            onSwipeEnd={setSelected}
            selected={selected}
        >
            {/* Page 1 - Event Overview */}
            <div className="page page1 rounded-md p-8 bg-white">
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Event Overview</h1>
                        <ul className="text-sm list-disc list-inside text-justify ">
                            <li><strong>The Linpack Club</strong> hosted its highly anticipated inaugural event, drawing attention from students and faculty alike. The event, titled <em>&quot;Embarking on the Basics of MATLAB: A Primer to Unlocking Its Potential,&quot;</em> was designed to introduce attendees to the fundamental concepts of MATLAB, a powerful tool widely used in engineering and scientific computations.</li>
                            <li>The event provided a platform for participants to immerse themselves in a hands-on learning experience. By focusing on the basics of MATLAB, the workshop aimed to lay a strong foundation for further exploration and mastery of the software. The content was carefully curated to cater to both beginners and those with some prior exposure to MATLAB.</li>
                            <li className='line-clamp-2'>The workshop was structured to promote active engagement through a series of practical sessions and quizzes. Participants were encouraged to apply the concepts they learned in real-time, fostering a deeper understanding of the material. This interactive approach not only enhanced learning but also made the sessions enjoyable and dynamic.</li>
                        </ul>
                    </div>
                    <div className="w-[48%]">
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>Attendees were given the opportunity to explore various applications of MATLAB, from simple mathematical operations to more complex programming techniques. The workshop emphasized the versatility of MATLAB, demonstrating its use in different fields such as data analysis, simulation, and algorithm development.</li>
                            <li>The event also served as a networking platform, allowing participants to connect with peers who share similar interests. The collaborative environment fostered a sense of community among attendees, making it an ideal setting for exchanging ideas and knowledge.</li>
                            <li>The Linpack Club ensured that the event was not only educational but also enjoyable. The friendly atmosphere, combined with the thrill of learning new skills, made the inaugural event a memorable experience for everyone involved.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Page 2 - Guest Lecture */}
            <div className="page page2 rounded-md p-8 bg-white">
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Guest Lecture</h1>
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>The event featured a distinguished guest lecture by <strong>Dr. Hari Niranjan</strong>, a renowned professor at Vellore Institute of Technology, Vellore Tamilnadu, India. Dr. Niranjan, known for his expertise in computational techniques and MATLAB, delivered a talk that captivated the audience.</li>
                            <li>During his lecture, Dr. Niranjan provided a deep dive into the advanced applications of MATLAB in various engineering disciplines. He shared insights from his extensive experience, discussing how MATLAB can be leveraged to solve complex real-world problems efficiently.</li>
                        </ul>
                    </div>
                    <div className="w-[48%]">
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>Dr. Niranjan emphasized the importance of mastering MATLAB for students and professionals aiming to excel in technical fields. He illustrated his points with practical examples, making the content accessible to both beginners and more experienced users.</li>
                            <li>The guest lecture was not just a presentation; it was an interactive session where participants had the chance to ask questions and engage in discussions. Dr. Niranjan’s approachable style and willingness to share knowledge made the session particularly enriching for all attendees.</li>
                            <li>This lecture added significant value to the event, leaving participants inspired and eager to apply the knowledge they gained in their future projects.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Page 3 - Workshop Focus & Recognition */}
            <div className="page page3 rounded-md p-8 bg-white">
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Workshop Focus</h1>
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>The workshop had a unique and highly relevant focus on <em>fake currency detection</em>. This topic was chosen to demonstrate the practical applications of MATLAB in solving contemporary challenges. Participants learned how to develop algorithms that can accurately identify counterfeit currency, a skill that is increasingly important in today’s digital economy.</li>
                            <li>The session on fake currency detection included detailed explanations of the techniques used in image processing and pattern recognition, two areas where MATLAB excels. Participants were guided through the process of designing and implementing these techniques, making the workshop both informative and hands-on.</li>
                        </ul>
                    </div>
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Recognition and Prizes</h1>
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>In recognition of the efforts and achievements of the participants, prizes were awarded to the top three winners of the quiz that followed the workshop. The quiz was designed to test the participants understanding of the concepts covered, and the winners were selected based on their performance.</li>
                            <li><strong>Mallika Manish Rajpal (22BCE10455)</strong> won the top prize, receiving a trophy for her outstanding performance. <strong>Abhishek D</strong> secured the second position and was awarded a gold medal, while <strong>Lucky Samanth (22BCY10225)</strong> earned the third spot, taking home a silver medal.</li>
                            <li>Certificates of participation were presented to all attendees as a token of acknowledgment for their active involvement in the event. Additionally, <strong>ABHISHEK AS (23BAS10033)</strong> was recognized as the most active participant throughout the event and was awarded a bronze medal.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Page 4 - Additional Highlights */}
            <div className="page page4 rounded-md p-8 bg-white">
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Fun-Filled Atmosphere</h1>
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>In addition to the educational aspects, the event created a fun-filled atmosphere that fostered a sense of camaraderie and enjoyment among participants. The organizers made sure to include elements that kept the energy high and the mood light, making it not just a learning experience but also a memorable social event.</li>
                            <li>Fun games were organized, allowing participants to unwind and enjoy themselves in between the more intensive workshop sessions. These activities added an element of entertainment to the event, ensuring that everyone had a good time.</li>
                        </ul>
                    </div>
                    <div className="w-[48%]">
                        <h1 className="text-2xl font-bold mb-4">Refreshments and Networking</h1>
                        <ul className="text-sm list-disc list-inside text-justify">
                            <li>The event concluded on a high note with refreshments being served, providing an opportunity for participants to relax and engage in casual interactions. This networking session was an excellent opportunity for attendees to connect with their peers, share experiences, and discuss future collaborations.</li>
                            <li>The combination of educational content, expert insights, recognition, and enjoyable activities made the Linpack Clubs inaugural event a truly enriching experience. Participants left the event not only with new skills and knowledge but also with lasting memories and connections.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </FlippingPages>
    </div>
</div>

    );
}

export default BookComponent;
