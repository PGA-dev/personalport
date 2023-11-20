import { Link } from 'react-router-dom';
import styles from './Nav.module.css'


const Nav = () => {

    return (
        <div>
            <ul>
                <li><Link to='/' className={styles.n}><i>Go Home</i></Link></li>
                <li><Link to='/sitemap' className={styles.n}><i>Go to SiteMap</i></Link></li>
                <li className={`${styles.dropDown} ${styles.dropBtn} ${styles.n}`}>Links
                    <div className={styles.dropDownContent}>
                        <h5 ><Link to='/contact' className={styles.n}><i>Go to Contacts</i></Link></h5>
                        <h5><Link to='/projects' className={styles.n}><i>Go to Projects</i></Link></h5>
                        <h5><Link to='/history' className={styles.n}><i>Go to History</i></Link></h5>
                        <h5><Link to='/resume' className={styles.n}><i>Go to Resume</i></Link></h5>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Nav;