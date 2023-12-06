import styles from './SiteCard.module.css';

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    return (
        <div className={styles.card}>
            <dl>
                <dt>{id}</dt>
                <dt>{name}</dt>
                <dt>{message}</dt>
                <dt><a href={link} target="_blank" rel="noreferrer">
                    {linkText}</a>
                </dt>
            </dl>

        </div>

    )
};

export default SiteRefCard;