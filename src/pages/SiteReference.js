import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './SiteReference.module.css';
import SiteRefCard from '../features/siteReference/SiteRefCard';
import SiteRefList from '../features/siteReference/SiteRefList';

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
                <div className={styles.gridSite}>
                    <div className={styles.item1}>
                        <animated.div style={animatedStyle}>
                            <h1 ><i>Site References</i></h1>

                        </animated.div>
                    </div>

                </div>

            
            <div className={styles.flexSite}>
                <div className={styles.siteCard}><h5><SiteRefList /></h5></div>
                <div className={styles.siteCard}><h5><SiteRefList /></h5></div>
                <div className={styles.siteCard}><h5><SiteRefList /></h5></div>
                <div className={styles.siteCard}><h5><SiteRefList /></h5></div>
                <div className={styles.siteCard}><h5><SiteRefList /></h5></div>
            </div>
</div>
  


    );
};

export default SiteMap;