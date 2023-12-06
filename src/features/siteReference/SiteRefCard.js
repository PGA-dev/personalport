import styles from './SiteCard.module.css';

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    return (
        <div className={styles.card}>
            <a href={link} target="_blank" rel="noreferrer">
                {id}{name}{message}{linkText}</a>
        </div>

    )
};

export default SiteRefCard;