import {Fragment, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import searchUsers from "@/api/searchUsers.js";
import { Table } from "@/components/Table/Table.jsx";

export function SearchResultPage() {
    const location = useLocation();

    // Получение параметров из URL-а
    const query = new URLSearchParams(location.search);
    const queryKey = query.get("key");
    const queryValue = query.get("value");

    const [dataSearch, setDataSearch] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchUsers(queryKey, queryValue);
                setDataSearch(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [queryKey, queryValue]);

    if (loading) return <Fragment>Загрузка...</Fragment>;
    if (error) return <Fragment>Ошибка: {error.message} <Link className="link" to={"/"}>На главную</Link></Fragment>;
    if (dataSearch.users.length === 0) return <Fragment><Link className="link" to={"/"}>Разультатов нету перейдите на главную</Link></Fragment>;

    return (
        <Fragment>
            <h2 className="container__title">Результаты поиска</h2>
            <Fragment>
                <Link className="link" to={"/"}>На главную</Link>
                <Table users={dataSearch.users} />
            </Fragment>
        </Fragment>
    );
}