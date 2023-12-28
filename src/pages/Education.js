
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/resources/profile.png';
import styles from './HomePage.module.css';

const Education = () => {

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (

        <div>
            <div>
                <div className={styles.gridContainer}>
                    <div className={styles.item1}>
                    <animated.div style={animatedStyle}>
                        <h1 >My Education and Certifications</h1>
                    </animated.div>

                    </div>


                </div>

            </div>
            <div >
            
                <table id='education'>
                    <caption>
                        Certifications
                    </caption>
                    <tr>
                        <th>Certification Name</th>
                        <th>Issuing Institution</th>
                        <th>Date Issued</th>
                        <th>Link</th>
                        <th>Notes</th>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <dialog></dialog>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name"></td>
                        <td data-cell="institution"></td>
                        <td data-cell="date"></td>
                        <td data-cell="link"></td>
                        <td data-cell="notes"></td>
                    </tr>
    
                </table>
            </div>

        </div>



    );
};


export default Education;