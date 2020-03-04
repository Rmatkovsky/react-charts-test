export default function filterDate(rows, id, filterValue) {
    return rows.filter((row) => {
        const dateFilterValue = new Date(filterValue).setHours(0, 0, 0, 0);
        const dateRowValue = new Date(row.values[ id ]).setHours(0, 0, 0, 0);

        return dateFilterValue === dateRowValue;
    });
}
