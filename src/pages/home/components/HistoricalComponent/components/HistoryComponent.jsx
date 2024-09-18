/* eslint-disable react/prop-types */
export const HistoryComponent = ({ history }) => {
    return (
        <>
            <div className="row">
                <div className="labels columns">
                    <label>Estatus:</label>
                    <span>{history.status}</span>
                </div>
                <div className="labels columns">
                    <label>Fecha:</label>
                    <span>{history.date}</span>
                </div>
                <div className="labels columns">
                    <label>Fecha GMT:</label>
                    <span>{history.gmt}</span>
                </div>
                <div className="labels columns">
                    <label>IP:</label>
                    <span>{history.ip}</span>
                </div>
                <div className="labels columns">
                    <label>OS:</label>
                    <span>{history.OS}</span>
                </div>
            </div>
            <div className="mt-1">
                <div className="labels columns">
                    <label>Agente:</label>
                    <span>{history.agent}</span>
                </div>
            </div>
            <div className="row mt-1">
                <div className="labels columns">
                    <label>Nuevo</label>
                    <input type="checkbox" checked={history.new} disabled />
                </div>
                <div className="labels columns">
                    <label>Descripcion:</label>
                    <span>{history.description}</span>
                </div>
                <div className="labels columns">
                    <label>Final</label>
                    <input type="checkbox" checked={history.new} disabled />
                </div>
                <div className="labels columns">
                    <label>Código CFS:</label>
                    <span>{history.cfscode}</span>
                </div>
                <div className="labels columns">
                    <label>Lenguaje:</label>
                    <span>{history.lang}</span>
                </div>
            </div>
        </>
    );
};
