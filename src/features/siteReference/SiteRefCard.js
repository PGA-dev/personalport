import styles from './SiteCard.module.css';

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    return (
        <div className={styles.card}>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{message}</li>
                <li><a href={link} target="_blank" rel="noreferrer">
                    {linkText}</a>
                </li>
            </ul>

        </div>

    )
};

export default SiteRefCard;