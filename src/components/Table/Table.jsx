import React from 'react';
import { TableRow } from "@/components/TableRow/TableRow.jsx";
import tableStyle from '@/components/Table/Table.module.scss';

export function Table({ users }) {
    return (
        <table className={tableStyle.table}>
            <thead className={tableStyle['table__head']}>
                <tr className={tableStyle['table__row']}>
                    <th className={tableStyle['table__header']}>ФИО</th>
                    <th className={tableStyle['table__header']}>Возраст</th>
                    <th className={tableStyle['table__header']}>Пол</th>
                    <th className={tableStyle['table__header']}>Номер телефона</th>
                    <th className={tableStyle['table__header']}>Адрес</th>
                </tr>
            </thead>
            <tbody className={tableStyle.table__body}>
            {users.map((user) => (
                <TableRow user={user} key={user.id}/>
            ))}
            </tbody>
        </table>
    )
}