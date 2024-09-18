/* eslint-disable react/prop-types */
import "../index.scss";
export const HistoryComponent = ({ history }) => {
    return (
        <>
            <div className="flexbox__historical">
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Estatus:</label>
                            <span>{history.status}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Fecha:</label>
                            <span>{history.date}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Fecha GMT:</label>
                            <span>{history.gmt}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>IP:</label>
                            <span>{history.ip}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>OS:</label>
                            <span>{history.OS}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexbox__historical">
                <div className="item__historical__full">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Agente:</label>
                            <span>{history.agent}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexbox__historical">
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Descripcion:</label>
                            <span>{history.description}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels columns">
                            <label>Lenguaje:</label>
                            <span>{history.lang}</span>
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels row">
                            <label>Nuevo</label>
                            <input type="checkbox" checked={history.new} disabled />
                        </div>
                    </div>
                </div>
                <div className="item__historical">
                    <div className="content__historical">
                        <div className="labels row ">
                            <label>Final</label>
                            <input type="checkbox" checked={history.new} disabled />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
