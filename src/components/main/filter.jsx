import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateRange from 'components/form/dateRange';
import Select from 'components/form/select';

import {
    getDefectsByDate,
    getGroupSystems,
    getCriticalsBySystem,
    getDefectsBySystemAndCritical,
    getMaxDate,
    getMinDate,
} from 'selectors';

import './sass/filter.scss';

export default class FilterComponent extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        handleSubmit: PropTypes.func,
    };

    state = {
        filteredItems: [],
        dateRange: [
            new Date(),
            new Date(),
        ],
        selectedSystem: null,
        selectedCritical: null,
        systemOptions: [],
        criticalOptions: [],
    };

    onChangeDateRange = (values) => {
        const { items } = this.props;
        const filteredItems = getDefectsByDate(items, values);
        const groupedSystemItems = getGroupSystems(filteredItems);
        const criticalOptions = getCriticalsBySystem(filteredItems,
            groupedSystemItems && groupedSystemItems.length ? groupedSystemItems[ 0 ].value : null
        );

        this.setState({
            filteredItems,
            systemOptions: groupedSystemItems,
            criticalOptions,
            dateRange: values,
        });
    };

    onChangeSystem = (event) => {
        const { items } = this.props;
        const { dateRange } = this.state;
        const filteredItems = getDefectsByDate(items, dateRange);
        const selectedSystem = event.target.value;

        this.setState({
            criticalOptions: getCriticalsBySystem(filteredItems, selectedSystem),
            selectedSystem,
        });
    };

    onChangeCritical = (event) => {
        const {
            dateRange,
            selectedSystem,
            filteredItems,
        } = this.state;
        const selectedCritical = event.target.value;
        const results = getDefectsBySystemAndCritical(filteredItems, selectedSystem, selectedCritical);

        this.setState({ selectedCritical });

        this.props.handleSubmit({
            items: results,
            dateRange,
            selectedCritical,
            selectedSystem,
        });
    };

    render() {
        const { items } = this.props;
        const { dateRange, systemOptions, criticalOptions } = this.state;
        const minDate = getMinDate(items, 'Дата создания');
        const maxDate = getMaxDate(items, 'Дата создания');

        return (
            <div className="main-filter">
                <DateRange
                    title="Select range"
                    minDate={minDate}
                    maxDate={maxDate}
                    value={dateRange}
                    onChange={this.onChangeDateRange}
                />
                <Select title="Select system" options={systemOptions} handleChange={this.onChangeSystem} />
                <Select title="Select critical" options={criticalOptions} handleChange={this.onChangeCritical} />
            </div>
        );
    }
}
