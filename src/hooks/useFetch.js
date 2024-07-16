import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constans/env";

const useFetch = ( page, limit) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}?offset=${(page - 1) * limit}&limit=${limit}`)
            .then((resp) => {
                setData(resp.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page, limit]);

    return { data, error, loading };
};

export default useFetch;
