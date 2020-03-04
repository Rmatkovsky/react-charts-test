import React from 'react';
import { Chart } from 'react-charts';

import PropTypes from 'prop-types';

import './sass/chart.scss';

ChartComponent.propTypes = {
    title: PropTypes.string,
    datums: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
};

export default function ChartComponent({ title, datums, type }) {
    const data = [{
        label: title,
        datums,
    }];

    const series = { type };

    const axes = [
        { primary: true, type: 'ordinal', position: 'top' },
        { position: 'left', type: 'linear', stacked: true },
    ];

    if (!datums.length) {
        return null;
    }

    return (
        <div className="chart-box">
            <Chart data={data} series={series} axes={axes} tooltip />
        </div>);
};
