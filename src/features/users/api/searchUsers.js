import {useEffect, useState} from "react";

const searchUsers = (key, value) => {
    const [dataSearch, setDataSearch] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${apiUrl}users/filter?key=${key}&value=${value}`);

                if (!response.status === 200) {
                    throw new Error(`HTTP ошибка! статус: ${response.status}`);
                }

                const data = await response.json();
                setDataSearch(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [key, value]);


    return { dataSearch, error, loading };
};

export default searchUsers;