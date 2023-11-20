import { Link } from 'react-router-dom';



const NavHeader = () => {

    return (
        <div>
        <div className={styles.dropdown}>
            <span><h1>Links</h1></span>
            <div className={styles.dropDownContent}>
                <h5 ><Link to='/' className={styles.h}><i>Go Home</i></Link></h5>
                <h5 ><Link to='/contact' className={styles.h}><i>Go to Contacts</i></Link></h5>
                <h5><Link to='/projects' className={styles.h}><i>Go to Projects</i></Link></h5>
                <h5><Link to='/history' className={styles.h}><i>Go to History</i></Link></h5>
                <h5><Link to='/resume' className={styles.h}><i>Go to Resume</i></Link></h5>
                <h5><Link to='/sitemap' className={styles.h}><i>Go to SiteMap</i></Link></h5>
            </div>

        </div>
        
        </div>
    );
};

export default NavHeader;