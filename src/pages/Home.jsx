import {Fragment, useState} from 'react';
import {InputApp} from "@/components/ui/Input/InputApp.jsx";
import {SortTable} from "@/components/SortTable/SortTable.jsx";
import {Table} from "@/components/Table/Table.jsx";
import getUsers from "@/api/getUsers.js";
import {
    increasingSort,
    descendingSort,
    filterByGenderMale,
    filterByGenderFemale,
    alphabetIncreasingSort, alphabetDescendingSort
} from "@/shared/utils/sortFunctions.js";

export function Home(){
    const {data, error, loading} = getUsers()
    const users = data && data.users ? data.users : [];

    const [sortState, setSortState] = useState('unsorted');

    const handleSortChange = (newSortState) => {
        setSortState(newSortState);
    }

    const renderTable = () => {
        switch (sortState) {
            case "unsorted":
                return <Table users={users} />
            case 'alphabetIncreasing':
                const usersSortedAlphabetIncreasing = alphabetIncreasingSort(users);
                return <Table users={usersSortedAlphabetIncreasing} />
            case 'alphabetDescending':
                const usersSortedAlphabetDescending = alphabetDescendingSort(users);
                return <Table users={usersSortedAlphabetDescending} />
            case 'increasing':
                const usersSortedIncreasing = increasingSort(users);
                return <Table users={usersSortedIncreasing} />
            case 'descending':
                const usersSortedDescending = descendingSort(users);
                return <Table users={usersSortedDescending} />
            case 'male':
                const usersFilteredMale = filterByGenderMale(users);
                return <Table users={usersFilteredMale} />
            case 'female':
                const usersFilteredFemale = filterByGenderFemale(users);
                return <Table users={usersFilteredFemale} />
            default:
                return <Table users={users} />
        }
    }

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка {error}</p>


    return (
        <Fragment>
            <InputApp type={"search"} placeholder={"Поиск"} />
            <SortTable onSortChange={handleSortChange} />
            {renderTable()}
        </Fragment>
    )
}

export default Home;