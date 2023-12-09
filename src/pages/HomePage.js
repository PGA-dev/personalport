
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './HomePage.module.css';

const HomePage = () => {

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
                        <h1 ><i>HomePage</i></h1>

                    </animated.div>

                    </div>

                    <div className={styles.item2}>
                    <animated.div style={animatedStyle}>
                    <img src={profile} alt='profile' width={300} className={styles.profile} />
                </animated.div>
                </div>
                </div>

            </div>


        </div>



    );
};


export default HomePage;