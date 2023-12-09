import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import  {Link}  from 'react-router-dom';
import styles from './Header.module.css'
import profile from '../app/profile.png';
//import cloud from '../../public/k-k-RnPuMyvPtss-unsplash.jpg';


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
        <div className={styles.flexHeader}>

            <div >
                
                <animated.div style={animatedStyle}>
                    <div className={styles.homeLink}>
                    <h1>PGA</h1>
                    <Link to='/'><img src={profile} alt='profile' width="200"
                        height="auto" className='profile' /></Link>
                    <h3 className='text-center'><i>Full Stack Developer</i></h3></div>
                </animated.div>
                
            </div>

        </div>
    );
};


export default Header;