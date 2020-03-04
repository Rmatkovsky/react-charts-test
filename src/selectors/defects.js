import groupBy from 'lodash/groupBy';

export const getDefectsByDate = (items, range) => {
    if (!range) {
        return [];
    }

    const from = new Date(range[ 0 ]);
    const to = new Date(range[ 1 ]).getTime();

    return items.filter((item) => {
        const itemCreateTime = new Date(item[ 'Дата создания' ]).getTime();

        return (itemCreateTime >= from && itemCreateTime <= to);
    });
};

export const getDefectsBySystemAndCritical = (items, system, critical) => {
    return items.filter((item) => {
        return (item[ 'System' ] === system && item[ 'Критичность' ] === critical);
    });
};

export const getGroupSystems = (items) => {
    return items.length ?
        Object.keys(groupBy(items, (item) => item[ 'System' ])).map((key) => ({ value: key, name: key })) :
        [];
};

export const getCriticalsBySystem = (items, system) => {
    const filteredItems = items
        .filter((item) => item[ 'System' ] === system);

    return Object.keys(groupBy(filteredItems, (item) => item[ 'Критичность' ]))
        .map((key) => ({ value: key, name: key }));
};

export const getMinDate = (items, key) => {
    const onlyDateItems = items.map((item) => new Date(item[ key ]));

    return new Date(Math.min.apply(null, onlyDateItems));
};

export const getMaxDate = (items, key) => {
    const onlyDateItems = items.map((item) => new Date(item[ key ]));

    return new Date(Math.max.apply(null, onlyDateItems));
};

export const getDefectsGroupByDate = (items) => {
    return groupBy(items, (item) => {
        const itemDate = new Date(item[ 'Дата создания' ]);

        return `${itemDate.getMonth() + 1}.${itemDate.getFullYear()}`;
    });
};

export const mapDefectsForChartBar = (items) => {
    const groupDates = getDefectsGroupByDate(items);

    return Object.keys(groupDates).map((key) => {
        return {
            x: key,
            y: groupDates[ key ].reduce((sum, currentItem) => sum + ~~currentItem.reopens_amount, 0),
            r: undefined,
        };
    });
};
