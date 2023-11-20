import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {

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
        <div className={styles.gridContainer}>
            <div>
                <animated.div style={animatedStyle}>
                    <h1>PGA</h1>
                </animated.div>
            </div>
            <div>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>Full Stack Developer</i></h3>
                </animated.div>
            </div>
            <div>
                <animated.div style={animatedStyle}>
                    <h1>PGA</h1>
                </animated.div>
            </div>
            <div>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>Full Stack Developer</i></h3>
                </animated.div>
            </div>

            <div className={styles.dropdown}>
                <animated.div style={animatedStyle}>
                    <span><h1>Links</h1></span>
                    <div className={styles.dropDownContent}>
                    <h5 ><Link to='/' className={styles.l}><i>Go Home</i></Link></h5>
                        <h5 ><Link to='/contact' className={styles.l}><i>Go to Contacts</i></Link></h5>
                        <h5><Link to='/projects' className={styles.l}><i>Go to Projects</i></Link></h5>
                        <h5><Link to='/history' className={styles.l}><i>Go to History</i></Link></h5>
                        <h5><Link to='/resume' className={styles.l}><i>Go to Resume</i></Link></h5>
                        <h5><Link to='/sitemap' className={styles.l}><i>Go to SiteMap</i></Link></h5>

                    </div>
                </animated.div>
            </div>
        </div>
    );
};


export default Header;