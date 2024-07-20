import tableRowStyle from './TableRow.module.scss';

export function TableRow({user}) {
    return (
        <tr className={tableRowStyle['table-row__tr']}>
            <td className={tableRowStyle['table-row__td']}>{ user.firstName } { user.lastName } { user.maidenName }</td>
            <td className={tableRowStyle['table-row__td']}>{ user.age }</td>
            <td className={tableRowStyle['table-row__td']}>{ user.gender }</td>
            <td className={tableRowStyle['table-row__td']}>{ user.phone }</td>
            <td className={tableRowStyle['table-row__td']}>{ user.address.address }, { user.address.city }</td>
        </tr>
    )
}