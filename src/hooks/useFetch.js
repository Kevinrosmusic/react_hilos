import axios from "axios";
import { useEffect, useState } from "react";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const useAxios = (url, method = "GET", body = null, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    url: `${VITE_API_URL}${url}`,
                    method,
                    data: body,
                    ...options,
                });
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body, options]);

    return { data, loading, error };
};

export default useAxios;
