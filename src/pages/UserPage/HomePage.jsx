import {Fragment, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {SortTable} from "@/features/users/components/SortTable/SortTable.jsx";
import {Table} from "@/features/users/components/Table/Table.jsx";
import {SearchBar} from "@/features/users/components/Search/SearchBar.jsx";
import getUsers from "@/features/users/api/getUsers.js";
import {
    increasingSort,
    descendingSort,
    filterByGenderMale,
    filterByGenderFemale,
    alphabetIncreasingSort, alphabetDescendingSort
} from "@/shared/utils/sortFunctions.js";

export function HomePage(){
    const { data, error, loading } = getUsers();
    const users = data && data.users ? data.users : [];
    const [sortState, setSortState] = useState('unsorted');
    const navigate = useNavigate();

    const handleSortChange = (newSortState) => {
        setSortState(newSortState);
    };

    const getSortedOrFiltered = () => {
        switch (sortState) {
            case 'alphabetIncreasing':
                return alphabetIncreasingSort(users);
            case 'alphabetDescending':
                return alphabetDescendingSort(users);
            case 'increasing':
                return increasingSort(users);
            case 'descending':
                return descendingSort(users);
            case 'male':
                return filterByGenderMale(users);
            case 'female':
                return filterByGenderFemale(users);
            default:
                return users;
        }
    };

    const renderTable = () => {
        const users = getSortedOrFiltered()
        return <Table users={users} />
    }

    const onSearch = (key, query) => {
        navigate(`/search-result?key=${key}&value=${query}`);
    };


    if (loading) return <Fragment>Загрузка...</Fragment>
    if (error) return <Fragment>Ошибка: {error.message} <Link className="link" to={"/"}>На главную</Link></Fragment>;

    return (
        <Fragment>
            <SearchBar onSearch={onSearch}/>
            <SortTable onSortChange={handleSortChange} />
            {renderTable()}
        </Fragment>
    )
}

export default HomePage;