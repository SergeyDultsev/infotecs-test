import { useState, useEffect } from "react";

const getUsers = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${apiUrl}users`);

                if (!response.status === 200) {
                    throw new Error(`HTTP ошибка! статус: ${response.status}`);
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, error, loading };
};


export default getUsers;