import { useState, useEffect, lazy, Suspense } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Resume.module.css';

const Resume = () => {

    const [isResume, setIsResume] = useState(false);
    const Res = lazy(() => import('../utilities/Res'));

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);


    return (

        <div className={styles.flexResume}>
            <div >
                <animated.div style={animatedStyle}>
                    <h1  >Resume and Skills Matrix</h1>
                </animated.div></div>


            <div >
                <animated.div style={animatedStyle}>
                    <h4 ><i>Click Button to view Resume</i></h4>
                    <h6>Download or print resume controls found on bottom right of document!</h6>
                    <button className={styles.button}
                        onClick={() => setIsResume(prev => !prev)}>
                        Resume
                    </button>
                    <Suspense fallback={<> Loading... </>}>{isResume ? <Res /> : <></>}</Suspense>
                </animated.div></div>

            <div >

                <table id='skills'>
                    <caption>
                        Skills Proficiency Table
                    </caption>
                    <tr>
                        <th>Skill</th>
                        <th>Current Proficiency</th>
                        <th>Years Used</th>
                        <th>Certificates</th>
                        <th>School/Companies Used</th>
                        <th>Notes</th>
                    </tr>
                    <tr>
                        <td data-cell="skill">HTML</td>
                        <td data-cell="proficiency">Intermediate-Advanced</td>
                        <td data-cell="years">25</td>
                        <td data-cell="certificates">NuCamp Web Fund</td>
                        <td data-cell="company">Ebay Store, RDI, NuCamp</td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">Javascript</td>
                        <td data-cell="Proficiency">Beginner-Intermediate</td>
                        <td data-cell="years">4-5</td>
                        <td data-cell="certificates">NuCamp React, React Native, Bootstrap, NuCamp Honors Front End, NuCamp Honors Full Stack, NuCamp Node.js</td>
                        <td data-cell="company">NuCamp, RDI</td>
                        <td data-cell="notes">Most of my experience in JS during my RDI years were using JQuerry, vanilla JS experience was mostly during my studies at NuCamp and when I programmed my own Ebay sites.</td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">Typescript</td>
                        <td data-cell="Proficiency">Beginner</td>
                        <td data-cell="years">.5 (6 months)</td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes">Currently working on Typescript</td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">JQuery</td>
                        <td data-cell="Proficiency">Beginner</td>
                        <td data-cell="years">2 years</td>
                        <td data-cell="certificates">NuCamp Bootstrap Front End</td>
                        <td data-cell="company">RDI, NuCamp</td>
                        <td data-cell="notes">This was a skill that I was up on until it became deprecated in almost every project application. If necessary I can revitalize my knowledge of JQuery fairly quickly.</td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">SQL</td>
                        <td data-cell="Proficiency">Intermediate</td>
                        <td data-cell="years">10</td>
                        <td data-cell="certificates">NuCamp SQL with Python</td>
                        <td data-cell="company">RDI, NuCamp</td>
                        <td data-cell="notes">NuCamp was a review of most of my SQL query skills, but during my time at RDI I worked with MSSQL to build SProcedures, Views, triggers and functions.</td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">CSS</td>
                        <td data-cell="Proficiency">Intermediate</td>
                        <td data-cell="years">20+</td>
                        <td data-cell="certificates">NuCamp WebDev Fundamentals</td>
                        <td data-cell="company">RDI, NuCamp</td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">Python</td>
                        <td data-cell="Proficiency">Beginner-Intermediate</td>
                        <td data-cell="years">2</td>
                        <td data-cell="certificates">Nucamp Python fundamentals, NuCamp SQL with Python, NuCamp DevOps, NuCamp Backend development, NuCamp Backend Honors development</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">React</td>
                        <td data-cell="Proficiency">Intermediate</td>
                        <td data-cell="years">2</td>
                        <td data-cell="certificates">Nucamp Front End Honors, NuCamp Front End Developer, NuCamp React, NuCamp React Native, NuCamp Node.js</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">React Native</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years">1</td>
                        <td data-cell="certificates">NuCamp ReactNative</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="notes"></td>
                    </tr>

                    <tr>
                        <td data-cell="Skill">C#</td>
                        <td data-cell="Proficiency">Novice-Beginner</td>
                        <td data-cell="years">2</td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company">RDI</td>
                        <td data-cell="notes">Out of practice, not currently using C#...used during my time at RDI</td>
                    </tr>

                    <tr>
                        <td data-cell="Skill">C++</td>
                        <td data-cell="Proficiency">Novice-Beginner</td>
                        <td data-cell="years">1</td>
                        <td data-cell="certificates">None</td>
                        <td data-cell="company"></td>
                        <td data-cell="notes">Took a C++ game dev Pre course 8 years ago</td>
                    </tr>
                    <tr>
                    <td data-cell="Skill">Git</td>
                        <td data-cell="Proficiency">Intermediate</td>
                        <td data-cell="years">3-5</td>
                        <td data-cell="certificates">None</td>
                        <td data-cell="company">RDI, NuCamp</td>
                        <td data-cell="notes">Have used Git fairly regularly for most of my development and testing career.</td>
                    </tr>

                </table>
            </div>

        </div>

    );
};

export default Resume;