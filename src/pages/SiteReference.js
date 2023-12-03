import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './SiteReference.module.css';

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
                <div className={styles.gridContainer}>
                    <div className={styles.item1}>
                        <animated.div style={animatedStyle}>
                            <h1 ><i>Site References</i></h1>

                        </animated.div>
                    </div>
                    <div className={styles.item2}>
                        <animated.div style={animatedStyle}>
                            <h1  >heading</h1>
                        </animated.div>
                    </div>
                </div>

            
            <div className={styles.flexContainer}>


                <div>example items</div>
                <div>mapped item</div>
                <div>mapped item</div>
                <div>mapped item</div>
                <div>mapped item</div>
            </div>
</div>
  


    );
};

export default SiteMap;