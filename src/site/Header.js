import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Header.module.css'

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
            <div>
                <animated.div style={animatedStyle}>
                    <h1>PGA</h1>
                </animated.div>
            </div>
        </div>
    );
};


export default Header;