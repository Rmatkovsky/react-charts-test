import SelectColumnFilter from 'components/table/filters/selectColumn';
import SelectDateFilter from 'components/table/filters/selectDate';
import filterDate from 'components/table/filters/filterDate';

export default [
    {
        Header: 'ID',
        accessor: 'ID',
    },
    {
        Header: 'System',
        accessor: 'System',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Summary',
        accessor: 'Summary',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Состояние',
        accessor: 'Состояние',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Найдено при',
        accessor: 'Найдено при',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Критичность',
        accessor: 'Критичность',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Тип Дефекта',
        accessor: 'Тип Дефекта',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'Дата создания',
        accessor: 'Дата создания',
        Filter: SelectDateFilter,
        filter: filterDate,
    },
    {
        Header: 'Дата изменения',
        accessor: 'Дата изменения',
        Filter: SelectDateFilter,
        filter: filterDate,
    },
    {
        Header: 'Дата закрытия',
        accessor: 'Дата закрытия',
        Filter: SelectDateFilter,
        filter: filterDate,
    },
    {
        Header: 'Метод обнаружения',
        accessor: 'Метод обнаружения',
        Filter: SelectColumnFilter,
        filter: 'includes',
    },
    {
        Header: 'reopens_amount',
        accessor: 'reopens_amount',
        Filter: SelectColumnFilter,
        filter: 'equals',
    },
];
