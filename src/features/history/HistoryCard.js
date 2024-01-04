import styles from './HistoryCard.module.css';

const HistoryCard = ({ history }) => {

    const { name1, name2, first, second, third, close } = history;


    return (
        <div className={styles.cardHistory}>
            <dl>
                <dt>{name1}</dt>
                <dt>{name2}</dt>
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