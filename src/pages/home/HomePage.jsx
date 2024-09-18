import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useFetch";
import { ContentComponent } from "./components/ContentComponent/ContentComponent";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { HistoricalComponent } from "./components/HistoricalComponent/HistoricalComponent";

export const HomePage = () => {
    const { cfskey, cfstoken } = useParams();

    const { data, error, loading } = useAxios(`/threads/token/${cfskey}/${cfstoken}`);

    const [showHistorical, setShowHistorical] = useState(false);

    if (loading) {
        return (
            <div className="loading">
                <div className="loading__spinner">LOADING</div>
            </div>
        );
    }

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container">
            <HeaderComponent setShowHistorical={setShowHistorical} showHistorical={showHistorical} data={data} />
            {showHistorical && <HistoricalComponent setShowHistorical={setShowHistorical} historical={data.history} />}
            <ContentComponent content={data.content} />
            <FormComponent agreement={data.agreement} body={data} />
        </div>
    );
};
