import styles from './SiteCard.module.css';

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    const cardNum = id +1;

    return (
        <div className={styles.card}>
            <dl>
                <dt><span>Ref #:</span> {cardNum}</dt>
                <dt></dt>
                <dt><span>Name: </span></dt>
                <dt>{name}</dt>
                <dt><span>Reference Message: </span></dt>
                <dt>{message}</dt>
                <dt><span>
                    Link to Source: </span></dt>
                <dt><a href={link} target="_blank" rel="noreferrer">
                     {linkText}</a>
                </dt>
            </dl>

        </div>

    )
};

export default SiteRefCard;