import { Link } from 'react-router-dom';
import styles from './Nav.module.css'


const Nav = () => {

    return (
        <div className={styles.container}>
            <ul>
                <li><Link to='/' className={styles.n}><i>Home</i></Link></li>
                <li><Link to='/sitemap' className={styles.n}><i>SiteMap</i></Link></li>
                <li className={`${styles.dropDown} ${styles.dropBtn} ${styles.n}`}><i>Links</i>
                    <div className={styles.dropDownContent}>
                        <h5><Link to='/' className={styles.n}><i>Home</i></Link></h5>
                        <h5 ><Link to='/contact' className={styles.n}><i>Contacts</i></Link></h5>
                        <h5><Link to='/projects' className={styles.n}><i>Projects</i></Link></h5>
                        <h5><Link to='/history' className={styles.n}><i>History</i></Link></h5>
                        <h5><Link to='/resume' className={styles.n}><i>Resume</i></Link></h5>
                        <h5><Link to='/sitemap' className={styles.n}><i>SiteMap</i></Link></h5>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Nav;