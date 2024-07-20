import { TableRow } from "@/features/users/components/TableRow/TableRow.jsx";
import tableStyle from '@/features/users/components/Table/Table.module.scss';
import { useState } from "react";

export function Table({ users, onUserSelect }) {
    const [columnWidths, setColumnsWidth] = useState([50, 100, 150, 200]);

    const handleMouseDown = (columnIndex) => (event) => {
        const startX = event.clientX;
        const startWidth = columnWidths[columnIndex];

        const handleMouseMove = (event) => {
            const newWidth = Math.max(50, startWidth + (event.clientX - startX));

            setColumnsWidth((prevWidths) => {
                const newWidths = [...prevWidths];
                newWidths[columnIndex] = newWidth;
                return newWidths;
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <table className={tableStyle.table}>
            <thead className={tableStyle['table__head']}>
            <tr className={tableStyle['table__row']}>
                {['ФИО', 'Возраст', 'Пол', 'Номер телефона', 'Адрес'].map((header, index) => (
                    <th
                        key={index}
                        className={tableStyle['table__header']}
                        style={{ width: columnWidths[index] }}
                    >
                        {header}
                        <div
                            className={tableStyle['resize-handle']}
                            style={{ cursor: 'ew-resize', width: '5px', height: '100%', position: 'absolute', right: 0, top: 0 }}
                            onMouseDown={handleMouseDown(index)}
                        />
                    </th>
                ))}
            </tr>
            </thead>
                <tbody className={tableStyle.table__body}>
                {users.map((user) => (
                    <TableRow user={user} key={user.id} onUserSelect={onUserSelect} columnWidths={columnWidths} />
                ))}
                </tbody>
        </table>
    );
}