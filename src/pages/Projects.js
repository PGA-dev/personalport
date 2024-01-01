import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Projects.module.css';

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

        <div className={styles.flexProject}>
<div>
                <animated.div style={animatedStyle}>
                    <h1  > Projects</h1>
                </animated.div></div>
<div>
                
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
                            <td data-cell="date">September 2023</td>
                            <td data-cell="name">Portfolio</td>
                            <td data-cell="company">Personal</td>
                            <td data-cell="technology">React,Redux,React Browser,HTML,CSS</td>
                            <td data-cell="repo">
                                <a className={styles.a} href='https://github.com/PGA-dev/personalport' target="_blank" rel="noreferrer"><i>GH: portfolio</i></a>
                            </td>
                            <td data-cell="notes">Static portfolio site</td>
                            <td data-cell="url">TBA</td>
                        </tr>
                        <tr>
                            <td data-cell="date">August/September 2022</td>
                            <td data-cell="name">Match Game</td>
                            <td data-cell="company">NuCamp</td>
                            <td data-cell="technology">HTML, CSS, Javascript</td>
                            <td data-cell="repo">
                                <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><i>GH: match game</i></a>
                            </td>
                            <td data-cell="notes">Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                            <td data-cell="url">TBA</td>
                        </tr>
                        <tr>
                            <td data-cell="date">August/September 2022</td>
                            <td data-cell="name">Guitar Information Guide</td>
                            <td data-cell="company">NuCamp</td>
                            <td data-cell="technology">HTML, CSS, Javascript</td>
                            <td data-cell="repo">
                                <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><i>GH: match game</i></a>
                            </td>
                            <td data-cell="notes">Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                            <td data-cell="url">TBA</td>
                        </tr>
                        <tr>
                            <td data-cell="date">August/September 2022</td>
                            <td data-cell="name">Grocery App</td>
                            <td data-cell="company">NuCamp</td>
                            <td data-cell="technology">HTML, CSS, Javascript</td>
                            <td data-cell="repo">
                                <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><i>GH: match game</i></a>
                            </td>
                            <td data-cell="notes">Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                            <td data-cell="url">TBA</td>
                        </tr>
                        <tr>
                            <td data-cell="date">August/September 2022</td>
                            <td data-cell="name">Full Stack Guitar Site</td>
                            <td data-cell="company">NuCamp</td>
                            <td data-cell="technology">HTML, CSS, Javascript</td>
                            <td data-cell="repo">
                                <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><i>GH: match game</i></a>
                            </td>
                            <td data-cell="notes">Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                            <td data-cell="url">TBA</td>
                        </tr>
                    </table>
                </div>
            
        </div>

    );
};



export default Projects;