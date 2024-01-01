import styles from './HistoryCard.module.css';

const HistoryCard = ({ history }) => {

    const { id, name, first, second, third, close } = history;

    const cardNum = id +1;

    return (
        <div className={styles.cardHistory}>
            <dl>
                <dt><span>Ref #:</span> {cardNum}</dt>
                <dt></dt>
                <dt><span>Name: </span></dt>
                <dt>{name}</dt>
                <dt><span>First paragraph: </span></dt>
                <dt>{first}</dt>
                <dt><span>Second paragraph: </span></dt>
                <dt>{second}</dt><dt><span>Third paragraph: </span></dt>
                <dt>{third}</dt>
                <dt><span>Final paragraph: </span></dt>
                <dt>{close}</dt>
            </dl>

        </div>

    )
};

export default HistoryCard;