import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import profile from '../app/profile.png';

const Nav = () => {
//possibly make sticky nav without dropdown...too few links to be useful in dropdown form currently
    return (
        <div className={styles.container}>
            <ul>
                <li><Link to='/' className={styles.n}><i>Home</i></Link></li>
                <li><Link to='/sitemap' className={styles.n}><i>SiteMap</i></Link></li>
                <li><Link to='/contact' className={styles.n}><i>Contact</i></Link></li>
                <li><Link to='/projects' className={styles.n}><i>Projects</i></Link></li>
                <li><Link to='/history' className={styles.n}><i>History</i></Link></li>
                <li><Link to='/resume' className={styles.n}><i>Resume</i></Link></li>
                <div className={styles.profile}> <img src={profile} alt='profile' className='profile' height={75} /> </div>
            </ul>
            
        </div>
    );
};


export default Nav;