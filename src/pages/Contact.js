import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
// import profile from '../app/profile.png';
import styles from './Contact.module.css'
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaYoutube, FaGitlab } from "react-icons/fa";


const Contact = () => {

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);
//Contact may not need to pull data from a db for feedback...probably will just pull the email/linked in, etc...
    return (

         
                <div className={styles.flexContact}>

                    <animated.div style={animatedStyle}>
                    <div className={styles.flex1}>  
                                           <a
                    className={styles.a}
                    role='button'
                    href='mailto:paulgadam@gmail.com'
                >
                    <FaEnvelopeOpen />
                </a>
                <a className={styles.a} href='https://github.com/PGA-dev' target="_blank" rel="noreferrer"><FaGithub /></a>
                <a className={styles.a} href="https://www.linkedin.com/in/paul-adam-86ba423b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a className={styles.a} href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA' target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a className={styles.a} href='https://gitlab.com/pga_dev/Portfolio' target="_blank" rel="noreferrer"><FaGitlab/></a>
                </div>

                    </animated.div>


                </div>







    );
};


export default Contact;