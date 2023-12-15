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
                    <button className={styles.button}
                        onClick={() => setIsResume(prev => !prev)}>Resume</button>
                    <Suspense fallback={<>Loading...</>}>{isResume ? <Res /> : <></>}</Suspense>
                </animated.div></div>

            <div >
            
                <table id='resume'>
                    <caption>
                        Skills Proficiency Table
                    </caption>
                    <tr>
                        <th>Skill</th>
                        <th>Current Proficiency</th>
                        <th>Years Used</th>
                        <th>Certificates</th>
                        <th>Projects/Companies Used</th>
                        <th>Notes</th>
                    </tr>
                    <tr>
                        <td data-cell="skill">Html</td>
                        <td data-cell="proficiency">Intermediate-Advanced</td>
                        <td data-cell="years">25</td>
                        <td data-cell="certificates">NuCamp Web Fund</td>
                        <td data-cell="company">Ebay, RDI, Nucamp</td>
                        <td data-cell="notes">No notes</td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">Javascript</td>
                        <td data-cell="Proficiency">Beginner-Intermediate</td>
                        <td data-cell="years">4-5</td>
                        <td data-cell="certificates">NuCamp React, React Native, Bootstrap</td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">SQL</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">CSS</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td> 
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">Python</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">React</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">React Native</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">C#</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="Skill">C++</td>
                        <td data-cell="Proficiency"></td>
                        <td data-cell="years"></td>
                        <td data-cell="certificates"></td>
                        <td data-cell="company"></td>
                        <td data-cell="notes"></td>
                    </tr>

                </table>
            </div>

        </div>

    );
};

export default Resume;