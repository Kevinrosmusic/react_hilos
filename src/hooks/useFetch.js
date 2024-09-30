import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
// import { data as mockData } from "../mock/data";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const useAxios = (url, method = "GET", body = null) => {
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
                });
                setData(response.data);
            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, loading, error };
};

export default useAxios;
