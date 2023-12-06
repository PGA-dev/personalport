import styles from './SiteCard.module.css';

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    const cardNum = id +1;

    return (
        <div className={styles.card}>
            <dl>
                <dt><span>Reference Id:</span> {cardNum}</dt>
                <dt><span>Name: </span>{name}</dt>
                <dt><span>Reference</span>{message}</dt>
                <dt><span>Link to Source: 
                    </span><a href={link} target="_blank" rel="noreferrer">
                     {linkText}</a>
                </dt>
            </dl>

        </div>

    )
};

export default SiteRefCard;