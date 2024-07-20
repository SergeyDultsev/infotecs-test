import tableRowStyle from './TableRow.module.scss';

export function TableRow({user, onUserSelect, columnWidths}) {
    const handleUser = () =>{
        onUserSelect(user);
    }

    return (
        <tr className={tableRowStyle['table-row__tr']} onClick={handleUser}>
            <td className={tableRowStyle['table-row__td']} style={{width: columnWidths[0]}}>
                {user.firstName} {user.lastName} {user.maidenName}
            </td>
            <td className={tableRowStyle['table-row__td']} style={{width: columnWidths[1]}}>
                {user.age}
            </td>
            <td className={tableRowStyle['table-row__td']} style={{width: columnWidths[2]}}>
                {user.gender}
            </td>
            <td className={tableRowStyle['table-row__td']} style={{width: columnWidths[3]}}>
                {user.phone}
            </td>
            <td className={tableRowStyle['table-row__td']} style={{width: columnWidths[4]}}>
                {user.address.address}, {user.address.city}
            </td>
        </tr>
    )
}