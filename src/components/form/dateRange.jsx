import React, { Fragment } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function({ ...props }) {
    return (
        <Fragment>
            <span className="title">{props.title}:</span>
            <DateRangePicker {...props} />
        </Fragment>
    );
}
