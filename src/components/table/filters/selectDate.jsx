import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

import { getMaxDate, getMinDate } from 'selectors';

SelectDateFilter.propTypes = {
    column: PropTypes.object,
};

function SelectDateFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    const valuesPreFilteredRows = preFilteredRows.map((item) => item.values);
    const minDate = getMinDate(valuesPreFilteredRows, id);
    const maxDate = getMaxDate(valuesPreFilteredRows, id);

    return (
        <DatePicker
            minDate={minDate}
            maxDate={maxDate}
            value={filterValue}
            onChange={(date) => {
                setFilter(date || undefined);
            }}
        />
    );
}

export default SelectDateFilter;
