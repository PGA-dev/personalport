import styles from './HistoryCard.module.css';

const HistoryCard = ({ history }) => {

    const { name1, name2, first, second, third, close } = history;


    return (
        <div className={styles.cardHistory}>
            <dl>
                <dt>{name1}</dt>
                <dt>{name2}</dt>
                <dt><span></span></dt>
                <dt>{first}</dt>
                <dt><span></span></dt>
                <dt>{second}</dt><dt><span></span></dt>
                <dt>{third}</dt>
                <dt><span></span></dt>
                <dt>{close}</dt>
            </dl>

        </div>

    )
};

export default HistoryCard;