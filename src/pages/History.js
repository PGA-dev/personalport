import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/resources/profile.png';
import HistoryList from '../features/history/HistoryList'
import styles from './History.module.css';
import { Link } from 'react-router-dom';

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

    return (

        <div>
            <div className={styles.flexHistory}>
                <div>
                    <animated.div style={animatedStyle}>
                        <h1 ><i>PGA History</i></h1>

                    </animated.div>

                    <Link to='/' >
                        <img src={profile} alt='profile' width="250"
                            height="auto" className='profile' /></Link>
                </div>
            </div>
            <div className={styles.flexHistory}>
                <HistoryList />
            </div>
        </div>

    );
};

export default History;