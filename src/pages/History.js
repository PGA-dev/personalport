import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './History.module.css';

const History = () => {

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

        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <animated.div style={animatedStyle}>
                    <h1  >History</h1>
                </animated.div></div>

                <div className={styles.item2}>
                <img src={profile} alt='profile' className='profile' />
            </div>
            <div className={styles.item3}>
                <animated.div style={animatedStyle}>
                    <h3 ><i>For Now</i></h3>
                </animated.div></div>

            <div className={styles.item4}>
                <h5>Table</h5>
            </div>

        </div>

    );
};

export default History;