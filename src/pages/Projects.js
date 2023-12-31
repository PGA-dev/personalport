import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Projects.module.css';
import { FaLink } from "react-icons/fa";

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

                    </tr>
                    <tr>
                        <td data-cell="date">September 2023 - Present</td>
                        <td data-cell="name">Portfolio</td>
                        <td data-cell="company">Personal</td>
                        <td data-cell="technology">React,Redux,React Browser,HTML,CSS</td>
                        <td data-cell="repo">
                            <a className={styles.a} href='https://github.com/PGA-dev/personalport' target="_blank" rel="noreferrer"><FaLink/></a>
                        </td>
                        <td data-cell="notes">Static portfolio site</td>
                    </tr>
                    <tr>
                        <td data-cell="date">June 2022</td>
                        <td data-cell="name">Match Game</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="technology">HTML, CSS, Javascript</td>
                        <td data-cell="repo">
                            <a className={styles.a} href='https://github.com/PGA-dev/match_game' target="_blank" rel="noreferrer"><FaLink/></a>
                        </td>
                        <td data-cell="notes">Final Project for Web Dev Fundamentals class, enhanced by PGA</td>
                    </tr>
                    <tr>
                        <td data-cell="date">March 2023</td>
                        <td data-cell="name">Guitar Information Guide</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="technology">HTML, CSS, Javascript</td>
                        <td data-cell="repo">
                            <a className={styles.a} href='https://github.com/PGA-dev/pgaguitar_pp' target="_blank" rel="noreferrer"><FaLink/></a>
                        </td>
                        <td data-cell="notes">Final Project for React.js, and Front end honors graduation</td>
                    </tr>
                    <tr>
                        <td data-cell="date">September 2022</td>
                        <td data-cell="name">Grocery App</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="technology">HTML, CSS, Javascript</td>
                        <td data-cell="repo">
                            <a className={styles.a} href='https://github.com/PGA-dev/grocery' target="_blank" rel="noreferrer"><FaLink/></a>
                        </td>
                        <td data-cell="notes">Final Project for Python/Dev Ops/SQL classes, and Back End honors graduation</td>
                    </tr>
                    <tr>
                        <td data-cell="date">April 2023</td>
                        <td data-cell="name">Full Stack Guitar Site</td>
                        <td data-cell="company">NuCamp</td>
                        <td data-cell="technology">HTML, CSS, Javascript, Node.Js, React, Redux</td>
                        <td data-cell="repo">
                            <a className={styles.a} href='https://github.com/PGA-dev/pgaguitarexp' target="_blank" rel="noreferrer"><FaLink/></a>
                        </td>
                        <td data-cell="notes">Final Project for Node JS class, and honors graduation project</td>
                    </tr>
                </table>
            </div>

        </div>

    );
};



export default Projects;