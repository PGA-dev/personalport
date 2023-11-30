import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Projects.module.css';
//import profile from '../app/profile.png';

const Projects = () => {

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

        <div className={styles.flexContainer}>
            <div>
                <animated.div style={animatedStyle}>
                    <h1  >Projects</h1>
                </animated.div>

                <table id='projects'>
                    <caption>
                        Projects
                    </caption>
                    <tr>
                        <th>Date</th>
                        <th>Project Name</th>
                        <th>Company/Institution</th>
                        <th>Techologies Used</th>
                        <th>Repository</th>
                        <th>Notes</th>
                        <th>URL</th>
                    </tr>
                    <tr>
                        <td>September 2023</td>
                        <td>Portfolio</td>
                        <td>Personal</td>
                        <td>React,Redux,React Browser,HTML,CSS</td>
                        <td>
                        <a className={styles.a} href='https://github.com/PGA-dev/personalport' target="_blank" rel="noreferrer"><i>GH: portfolio</i></a>
                            </td>
                        <td>Static portfolio site</td>
                        <td>TBA</td>
                    </tr>
                    <tr>
                        <td>August/September 2022</td>
                        <td>Match Game</td>
                        <td>NuCamp</td>
                        <td>HTML, CSS, Javascript</td>
                        <td>
                        <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><i>GH: match game</i></a>
                        </td>
                        <td>Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                        <td>TBA</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
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

export default Projects;