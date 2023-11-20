import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './Contact.module.css'

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
//must re-write css in module that doesn't use bs or reactstrap inline
    return (
        <div>
            <div>
                <div className={styles.gridContainer}>
                    <div className={styles.item1}>
                    <animated.div style={animatedStyle}>
                        <h1 ><i>Contact</i></h1>

                    </animated.div>

                    </div>

                    <div className={styles.item2}>
                    <animated.div style={animatedStyle}>
                    <h4 ><i>Some cool text or picture</i></h4>
                    <img src={profile} alt='profile' width={200} className={styles.profile} />
                </animated.div>
                </div>
                </div>

            </div>
            <div className={styles.flexContainer}>

                <div>Favorites links</div>
            </div>

        </div>


    );
};


export default Contact;