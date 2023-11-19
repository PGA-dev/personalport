import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './SiteMap.module.css';

const SiteMap = () => {

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
            <div>
                <div className={styles.gridContainer}>
                    <div className={styles.item1}>
                    <animated.div style={animatedStyle}>
                        <h1 ><i>Site Map</i></h1>

                    </animated.div>
                    </div>
                </div>

            </div>
            <div className={styles.flexContainer}>

                <div>
                    <animated.div style={animatedStyle}>
                        <h1  >Each Link will be in a simple container using a mapped jsx component for the links themselves</h1>
                    </animated.div>
                </div>
            </div>

        </div>


    );
};

export default SiteMap;