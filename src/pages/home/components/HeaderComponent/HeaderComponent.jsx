/* eslint-disable react/prop-types */

import { HistoryComponent } from "../HistoricalComponent/components/HistoryComponent";
import "./index.scss";
export const HeaderComponent = ({ setShowHistorical, data, showHistorical }) => {
    const handleShowHistorical = () => {
        setShowHistorical(!showHistorical);
    };

    return (
        <div className="card">
            <div className="card__body">
                <div className="row">
                    <div className="labels columns">
                        <label>Código CFS:</label>
                        <span>{data.cfscode}</span>
                    </div>
                    <div className="labels columns">
                        <label>Emisor del hilo:</label>
                        <span>{data.sender.user}</span>
                    </div>
                    <div className="labels columns">
                        <label>Destinatario del hilo:</label>
                        <span>{data.recipient.address}</span>
                    </div>
                    <div className="labels columns ">
                        <label>Histórico de estados:</label>
                        <div className="card card--clickable" onClick={handleShowHistorical}>
                            <div className="card__body">
                                <HistoryComponent history={data.history[0]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
