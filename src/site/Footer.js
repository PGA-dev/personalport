import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import profile from '../app/profile.png';
import { FaDatabase, FaReact } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaYoutube, FaGitlab } from "react-icons/fa";


const Footer = () => {

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

        <footer className={styles.footer}>

            <div>
                <animated.div style={animatedStyle}>
                    <div className={styles.contactLink}>

                        <Link to='contact' >
                            <img src={profile} alt='profile' width="75"
                                height="auto" className='profile' /></Link>
                    </div>
                </animated.div>

            </div>
            <div className={styles.profile}>                             <a
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
            <div>
                <dl>
                    <dt>
                        <i><a className={styles.fav1} href='https://my-json-server.typicode.com/' target="_blank" rel="noreferrer">Data powered by My JSON Server Typicode! <FaDatabase /></a></i>
                    </dt>
                    <dt>
                        <i><a className={styles.fav2} href='https://react.dev/' target="_blank" rel="noreferrer">Code Engineered by PGA using React <FaReact /></a></i>
                    </dt>
                </dl>

            </div>

        </footer>

    );
};

export default Footer;