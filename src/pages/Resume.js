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

        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <animated.div style={animatedStyle}>
                    <h1  >Resume and Skills Matrix</h1>
                </animated.div></div>

            <div className={styles.item2}>
                Mission statement

            </div>
            <div className={styles.item3}>
                <animated.div style={animatedStyle}>
                    <h4 ><i>Click Button to view Resume</i></h4>
                    <button className={styles.button}
                        onClick={() => setIsResume(prev => !prev)}>Resume</button>
                    <Suspense fallback={<>Loading...</>}>{isResume ? <Res />: <></>}</Suspense> 
                </animated.div></div>

            <div className={styles.item4}>
                <h3>Skills</h3>

                <table id='projects'>
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
                        <td>Html</td>
                        <td>Intermediate-Advanced</td>
                        <td>25</td>
                        <td>NuCamp Web Fund</td>
                        <td>Ebay, RDI, Nucamp</td>
                        <td>No notes</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>Beginner-Intermediate</td>
                        <td>4-5</td>
                        <td>NuCamp React, React Native, Bootstrap</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SQL</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>React Native</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>C#</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                                        <tr>
                        <td>C++</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
            </div>

        </div>

    );
};

export default Resume;