import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import profile from '../app/profile.png';
import { FaDatabase, FaReact } from "react-icons/fa";



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
                            <img src={profile} alt='profile' width="200"
                                height="auto" className='profile' /></Link>
                    </div>
                </animated.div>

            </div>
            <div>
                <dl>
                    <dt>
                        <i><a className={styles.fav1} href='https://github.com/typicode' target="_blank" rel="noreferrer">Data powered by Typicode! <FaDatabase /></a></i>
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