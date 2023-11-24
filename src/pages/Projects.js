import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Projects.module.css';
import profile from '../app/profile.png';

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
                        <th>Techologies Used</th>
                        <th>Repository</th>
                        <th>URL</th>
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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