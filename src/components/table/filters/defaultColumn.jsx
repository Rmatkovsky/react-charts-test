import React from 'react';
import PropTypes from 'prop-types';

DefaultColumnFilter.propTypes = {
    column: PropTypes.object,
};

function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

export default DefaultColumnFilter;
