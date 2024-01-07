
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Education.module.css';
import { FaCertificate, FaMedal } from "react-icons/fa";

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
                                <h6>Triple honors graduate, including being the featured honors project from Back end Honors graduation ceremony </h6>
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
                        <td data-cell="name">Full Stack Honors</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">April 17, 2023</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/honors/Backend_with_NodeJS-Full_Stack_Web_and_Mobile_Development_Certificate___Honor_Student_20017.pdf'  target="_blank" rel="noreferrer"><FaMedal /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Front End Web Development</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">March 13, 2023</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/Front_End_Web_UI_Frameworks_and_Tools_Bootstrap_4-Front_End_Web_and_Mobile_Development_Certificate___Honor_Student_19470.pdf'><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <dialog></dialog>
                    <tr>
                        <td data-cell="name">Front End Web Developement Honors</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">March 13, 2023</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/Front_End_Web_UI_Frameworks_and_Tools_Bootstrap_4-Front_End_Web_and_Mobile_Development_Certificate___Honor_Student_19470.pdf'><FaMedal /></a></td>
                        <td data-cell="notes"></td>
                    </tr>

                    <tr>
                        <td data-cell="name">Front End Bootstrap</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">December 28, 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/Front_End_Web_UI_Frameworks_and_Tools_Bootstrap_4-Bootstrap_Course_Certificate_17957.pdf'><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Web Dev Fundamentals</td>
                        <td data-cell="institution">Nucamp</td>
                        <td data-cell="date">May 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/HTML%2C_CSS_and_JavaScript-HTML%2C_CSS_and_JavaScript_Course_Certificate_13820.pdf' target="_blank" rel="noreferrer"><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    
                    <tr>
                        <td data-cell="name">Front End: React</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">February 6, 2023</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/Dynamic_with_React-React_Course_Certificate_18611.pdf'><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Front End: React Native</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">March, 13, 2023</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Front/Front_End_Web_UI_Frameworks_and_Tools_Bootstrap_4-React_Native_Course_Certificate_19469.pdf'><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Python Fundamentals/Data Structures and Algorithms </td>
                        <td data-cell="institution">Nucamp</td>
                        <td data-cell="date">June 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/python_fundamentals.pdf' target="_blank" rel="noreferrer"><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">SQL With Python</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">August 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/SQL_with_python.pdf' target="_blank" rel="noreferrer"><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Dev Ops with Python</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">September 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/Modern_Software_Engineering_with_DevOps-Backend%2C_SQL%2C_and_DevOps_with_Python_Development_Certificate_16030.pdf'><FaCertificate /></a></td>
                        <td data-cell="notes"></td>
                    </tr>
                    <tr>
                        <td data-cell="name">Back End Honors: Dev Ops with SQL and Python</td>
                        <td data-cell="institution">NuCamp</td>
                        <td data-cell="date">September 2022</td>
                        <td data-cell="link"><a className={styles.a} href='https://github.com/PGA-dev/Cert/blob/main/Back/Modern_Software_Engineering_with_DevOps-Backend%2C_SQL%2C_and_DevOps_with_Python_Certificate___Honor_Student_16611.pdf'><FaMedal /></a></td>
                        <td data-cell="notes"></td>
                    </tr>


                </table>
            </div>

        </div>



    );
};


export default Education;