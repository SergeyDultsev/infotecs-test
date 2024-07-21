import {Fragment, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import searchUsers from "@/features/users/api/searchUsers.js";
import { Table } from "@/features/users/components/Table/Table.jsx";
import {ModalApp} from "@/shared/ui/Modal/ModalApp.jsx";

export function SearchResultPage() {
    const location = useLocation();

    const [selectedUser, setSelectedUser] = useState(null);

    // Получение эмита из таблицы
    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const renderTable = () => {
        return <Table
            users={users}
            onUserSelect={handleUserSelect}/>
    }

    // Получение параметров из URL-а
    const query = new URLSearchParams(location.search);
    const queryKey = query.get("key");
    const queryValue = query.get("value");

    const { dataSearch, error, loading }  = searchUsers(queryKey, queryValue);
    const users = dataSearch && dataSearch.users ? dataSearch.users : [];

    if (loading) return <Fragment>Загрузка...</Fragment>;
    if (error) return <Fragment>Ошибка: {error.message} <Link className="link" to={"/"}>На главную</Link></Fragment>;
    if (users.length === 0) return <Fragment><Link className="link" to={"/"}>Разультатов нету перейдите на главную</Link></Fragment>;

    return (
        <Fragment>
            <h2 className="container__title">Результаты поиска</h2>
            <Fragment>
                <Link className="link" to={"/"}>На главную</Link>
                <ModalApp user={selectedUser} onClose={() => setSelectedUser(null)}></ModalApp>
                {renderTable()}
            </Fragment>
        </Fragment>
    );
}