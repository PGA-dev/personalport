import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaYoutube, FaGitlab } from "react-icons/fa";

const Nav = () => {
    //possibly make sticky nav without dropdown...too few links to be useful in dropdown form currently
    return (
        <div className={styles.container}>

            <ul>
            
                <li><Link to='/' className={styles.n}><i>Home</i></Link></li>
                <li><Link to='/history' className={styles.n}><i>History</i></Link></li>
                <li><Link to='/education' className={styles.n}><i>Education</i></Link></li>
                <li><Link to='/projects' className={styles.n}><i>Projects</i></Link></li>
                <li><Link to='/resume' className={styles.n}><i>Resume</i></Link></li>
                <li><Link to='/sitereference' className={styles.n}><i>SiteReference</i></Link></li>
                <div className={styles.profile}>                             
                <a
                    className={styles.a}
                    role='button'
                    href='mailto:paulgadam@gmail.com'
                >
                    <FaEnvelopeOpen />
                </a>
                    <a className={styles.a} href='https://github.com/PGA-dev' target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className={styles.a} href="https://www.linkedin.com/in/paul-adam-86ba423b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a className={styles.a} href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA' target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a className={styles.a} href='https://gitlab.com/pga_dev/Portfolio' target="_blank" rel="noreferrer"><FaGitlab/></a>
                </div>
            </ul>
           
        </div>
    );
};


export default Nav;