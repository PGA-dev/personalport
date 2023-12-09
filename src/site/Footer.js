import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import profile from '../app/profile.png';
import { FaLinkedin, FaGithub, FaGitlab, FaYoutube, FaEnvelopeOpen } from "react-icons/fa";



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
                    <h5 ><Link to='/' className={styles.l}><i>Home</i></Link></h5>
                    <h5 ><Link to='/contact' className={styles.l}><i>Contacts</i></Link></h5>
                    <h5><Link to='/projects' className={styles.l}><i>Projects</i></Link></h5>
                    <h5><Link to='/history' className={styles.l}><i>History</i></Link></h5>
                    <h5><Link to='/resume' className={styles.l}><i>Resume</i></Link></h5>
                    <h5><Link to='/sitereference' className={styles.l}><i>SiteReference</i></Link></h5>
                </animated.div>
            </div>
            <div>
                <animated.div style={animatedStyle}>
                    <div className={styles.contactLink}>
                    
                        <Link to='contact' >
                        <img src={profile} alt='profile' width="200"
                            height="auto" className='profile' /></Link>
                    </div>
                    </animated.div>

            </div>
            <div>

                <animated.div style={animatedStyle}>
                    <dl>
                        <dt >
                            <a className={styles.a} href="https://www.linkedin.com/in/paul-adam-86ba423b/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                        </dt>
                        <dt>
                            <a className={styles.a} href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA' target="_blank" rel="noreferrer"><FaYoutube/></a>
                        </dt>
                        <dt>
                            <a
                                className={styles.a}
                                role='button'
                                href='mailto:paulgadam@gmail.com'
                            >
                            <FaEnvelopeOpen/>
                            </a>
                        </dt>
                        <dt>
                            <a className={styles.a} href='https://github.com/PGA-dev' target="_blank" rel="noreferrer"><FaGithub/></a>
                        </dt>
                        <dt>
                            <a className={styles.a} href='https://gitlab.com/pga_dev/Portfolio' target="_blank" rel="noreferrer"><FaGitlab/></a>
                        </dt>
                        <br></br>
                    </dl>
                </animated.div>
            </div>

        </footer>

    );
};

export default Footer;