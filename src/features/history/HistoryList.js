import { useSelector } from "react-redux";
import { selectAllHistory } from "./historySlice";
import HistoryCard from './HistoryCard';

const HistoryList = () => {
    const history = useSelector(selectAllHistory);
    console.log('history: ', history);


    return (
        <>
            {history.map((history) => {
                return (
                    <div key={history.id}>
                        <HistoryCard history={history} />
                    </div>

                )
            })}
        </>
    )
};

export default HistoryList;