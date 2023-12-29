
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Education.module.css';
import { FaCertificate, FaMedal} from "react-icons/fa";

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

        <div className={styles.flexEducation}>
  
                <div >
                    <div className={styles.item1}>
                    <animated.div style={animatedStyle}>
                        <h1 >My Education and Certifications</h1>
                    </animated.div>

                    </div>



            </div>
            <div>
        <dl>
            <dt> 
                <h3>NuCamp</h3>
                <dl> 
                    <h5>Full Stack Web Development (Honors Back end, Honors Full Stack, Honors Front end) Graduated 2023 </h5>
                    <dt>
                        <h6>React, React Native, Node JS, Python, docker, MVC, Django using MVT, PostgreSQL, Flask </h6>
                    </dt>
                    <dt>
                        <h6>Triple honors graduate including being the featured honors project from Back end Honors graduation ceremony </h6>
                    </dt>
                </dl>
            </dt>
            </dl>
            <dl>
            <dt><h3>University of Edinboro</h3>
            <dl>
                <h5>MA in Social Science Sociology (GPA 3.92, Minors in History and Anthropology), Graduated 2009 </h5>
                    <dt>
                        <h6>Dialogue Across Disciplines Conference First Place Winner</h6>
                    </dt>
                    <dt>
                        <h6>Strong focus in Methodology, Research and Methodological Analysis tools</h6>
                    </dt>

                </dl>

            </dt>
            <dt>
                <dl>
                    <h5>BA in Philosophy (Summa Cum Laude, GPA 3.89, Minor in Anthropology and Music), Graduated 2005</h5>
                    <dt>
                        <h6>Dean's List All semesters</h6>
                    </dt>
                    <dt>
                        <h6>Philosophy Club President</h6>
                    </dt>
                    <dt>
                        <h6>Focus in Scientific and Logical Philosophy</h6>
                    </dt>
                </dl>

            </dt>
        </dl>

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
                        <td data-cell="name">Web Dev Fundamentals</td>
                        <td data-cell="institution">Nucamp</td>
                        <td data-cell="date">May 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/HTML%2C_CSS_and_JavaScript-HTML%2C_CSS_and_JavaScript_Course_Certificate_13820.pdf' target="_blank" rel="noreferrer"><FaCertificate/></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Python Fundamentals/Data Structures and Algorithms </td>
                        <td data-cell="institution">Nucamp</td>
                        <td data-cell="date">June 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/python_fundamentals.pdf' target="_blank" rel="noreferrer"><FaCertificate/></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">SQL With Python</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">August 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/SQL_with_python.pdf' target="_blank" rel="noreferrer"><FaCertificate/></a></td>
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