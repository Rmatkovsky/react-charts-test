import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

Select.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func,
};

function Select({ title, options, handleChange }) {
    return (
        <Fragment>
            <span className="title">{title}:</span>
            <select onChange={handleChange}>
                {
                    options && (
                        options.map((option) => (
                            <option
                                key={JSON.stringify(option)}
                                value={option.value}
                            >
                                {option.name}
                            </option>
                        ))
                    )
                }
            </select>
        </Fragment>
    );
}

export default Select;
