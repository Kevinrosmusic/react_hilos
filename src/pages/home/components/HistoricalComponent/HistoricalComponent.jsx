/* eslint-disable react/prop-types */
import { HistoryComponent } from "./components/HistoryComponent";
import "./index.scss";
export const HistoricalComponent = ({ setShowHistorical, historical }) => {
    const handleShowHistorical = () => {
        setShowHistorical(false);
    };

    return (
        <div className={`card mt-22`}>
            <div className="card__body">
                <div className="card__icon card--clickable" onClick={handleShowHistorical}>
                    X
                </div>
                {historical.map((history) => (
                    <div className="card mt-10" key={history.sid}>
                        <div className="card__body">
                            <HistoryComponent history={history} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
