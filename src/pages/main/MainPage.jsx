import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDefects } from 'actions/defects';

import defectsColumn from 'constants/tables/defects.constants';

import TableComponent from 'components/table/table';
import ChartComponent from 'components/charts/chart';

import Filter from 'components/main/filter';

import { mapDefectsForChartBar } from 'selectors';

class MainPage extends Component {
    static propTypes = {
        getDefects: PropTypes.func.isRequired,
        defects: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    static defaultProps = {
        defects: [],
    };

    state = {
        datums: [],
    };

    handleSelectedFilters = ({ ...props }) => {
        const datums = mapDefectsForChartBar(props.items);
        this.setState({ datums });
    };

    componentDidMount() {
        this.props.getDefects();
    }

    render() {
        const { defects } = this.props;
        const { datums } = this.state;

        return (
            <Fragment>
                <center><h1>Test task(react-charts) by Ruslan Matkovsky</h1></center>
                <Filter items={defects} handleSubmit={this.handleSelectedFilters} />
                <ChartComponent type="bar" title="Draw graphic by criticals" datums={datums} />
                <TableComponent columns={defectsColumn} data={defects} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        defects: state.defects.items,
    }
);


export default connect(
    mapStateToProps,
    { getDefects }
)(MainPage);
