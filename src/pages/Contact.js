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
//Contact may not need to pull data from a db for feedback...probably will just pull the email/linked in, etc...
    return (
        <div>
            <div>
                <div className={styles.gridContact}>
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
            <div className={styles.flexContact}>

                <div>Favorites links</div>
            </div>

        </div>


    );
};


export default Contact;