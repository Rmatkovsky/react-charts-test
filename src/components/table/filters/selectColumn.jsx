import React from 'react';
import PropTypes from 'prop-types';

SelectColumnFilter.propTypes = {
    column: PropTypes.object,
};

function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    const options = React.useMemo(() => {
        const options = new Set();

        preFilteredRows.forEach((row) => {
            options.add(row.values[ id ]);
        });

        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <select
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default SelectColumnFilter;
