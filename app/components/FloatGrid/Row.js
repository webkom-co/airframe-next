import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    WidthProvider,
    Responsive
} from 'react-grid-layout';

import {
    Row as BootstrapRow
} from 'components';

const ResponsiveGrid = WidthProvider(Responsive);

const simplifyChildrenArray = (children) => _.map(React.Children.toArray(children), child => (
    { ...child, key: child.key.replace(/\.\$/g, '') }
));
const responsiveBreakpoints = {
    xl: 1199, lg: 991, md: 767, sm: 576, xs: 0
};
const reactGridLayoutProps = ['rowHeight'];

export class Row extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.node,
        columnsSizes: PropTypes.object,
        optimalColumns: PropTypes.bool,
        onLayoutChange: PropTypes.func,
        onColumnsOptimized: PropTypes.func
    };

    static defaultProps = {
        columnsSizes: {
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12
        },
        optimalColumns: true,
        onLayoutChange: function() { },
        onColumnsOptimized: function() { }
    };

    constructor(props) {
        super(props);

        this.currentLayout = 'lg';

        const originalColumns = this.getColumnSizes();
        const optimizedColumns = this.calcColumns(this.props.children, originalColumns);
        const childArray = simplifyChildrenArray(this.props.children);

        if(!_.isEqual(optimizedColumns, this.props.columnSizes)) {
            this.props.onColumnsOptimized(optimizedColumns);
        }

        this.state = {
            layouts: this.calcLayout(childArray, optimizedColumns, originalColumns),
            columns: optimizedColumns
        };
    }

    layoutChanged(currentLayout, allLayouts) {
        const outputLayout = React.Children.map(this.props.children, (child) => {
            const sourceObject = _.find(currentLayout, { i: child.key });

            if(!sourceObject) {
                return;
            }

            const sizes = _.pick(sourceObject, ['maxH', 'maxW', 'minW']);

            return {
                ...sizes,
                key: child.key,
                [`${this.currentLayout}X`]: sourceObject.x,
                [`${this.currentLayout}Y`]: sourceObject.y,
                [`${this.currentLayout}`]: sourceObject.w,
                [`${this.currentLayout}H`]: sourceObject.h
            }
        });

        this.props.onLayoutChange(outputLayout);

        return true;
    }

    calcColumns(children, initialColumns) {
        const columns = _.clone(initialColumns);

        if(this.props.optimalColumns) {
            const getMinCol = (children, colKey) => {
                const colValues = React.Children.map(children, child => child.props[colKey] || 12);
                const minColValue = _.min(colValues);

                return minColValue;
            };

            _.keys(columns).forEach(colKey => {
                let lowestColVal = getMinCol(children, colKey);
                let normalizedCols = React.Children.map(children, child => (child.props[colKey] || 12) / lowestColVal);
                let normalizedColsOk = _.reduce(normalizedCols, (memo, col) => memo && (col % 1 === 0), true);

                if(normalizedColsOk) {
                    columns[colKey] = 12 / lowestColVal;
                }
            });
        }

        return columns;
    }

    calcLayout(children, optimizedColumns, originalColumns) {
        const layout = { };

        /*
            Imitates Bootstrap responsive column definition system

            Searches for size which can be used
            for sizing the column in the current responsive breakpoint.
            For example: When the current breakpoint is LG, but the column has
            only set XS it will sequentially serch for this value
            through LG, MD, SM, XS until it is found.
        */
        const closestDefinedColumn = (childProps, currentCol) => {
            const colsSequence = ['lg', 'md', 'sm', 'xs'];
            const childColumns = _.pick(childProps, colsSequence);

            const currentColIndex = _.indexOf(colsSequence, currentCol);
            const filteredSequence = _.drop(colsSequence, currentColIndex);
            // Default val used if none will be found
            let closestDefinedColumn;
            filteredSequence.forEach(seqKey => {
                if(!closestDefinedColumn && childColumns[seqKey]) {
                    closestDefinedColumn = childColumns[seqKey];
                }
            });

            return childColumns[currentCol] || closestDefinedColumn || 12;
        };

        _.chain(optimizedColumns)
            .keys()
            .each(colName => {
                const colValue = optimizedColumns[colName];
                const currentLayout = [];

                children.forEach((child, index) => {
                    const prevItem = currentLayout.length > 0 ? currentLayout[index - 1] : null;
                    const prevWidth = prevItem ? prevItem.x + prevItem.w : 0;
                    const prevY = prevItem ? prevItem.y : 0;

                    const childWidth = (child.props[colName] || closestDefinedColumn(child.props, colName));

                    const childWidthNormalized = childWidth * (colValue / originalColumns[colName]);

                    let x = prevWidth;
                    // Correct if target x will be larger then max columns available
                    //x = x >= colValue ? 0 : x;

                    currentLayout.push({
                        i: child.key,
                        // Correct if target x will be larger then max columns available
                        x: typeof child.props[`${colName}X`] !== 'undefined' ? child.props[`${colName}X`] : (x + childWidthNormalized > colValue ? 0 : x),
                        y: typeof child.props[`${colName}Y`] !== 'undefined' ? child.props[`${colName}Y`] : (x + childWidthNormalized > colValue ? prevY + 1 : prevY),
                        w: childWidthNormalized || undefined,
                        h: typeof child.props[`${colName}H`] !== 'undefined' ? child.props[`${colName}H`] : 1,
                        minH: 1,
                        maxH: child.props.maxH || Number.POSITIVE_INFINITY,
                        minW: child.props.minW || 1,
                        maxW: child.props.maxW || Number.POSITIVE_INFINITY
                    });
                });

                layout[colName] = currentLayout;
            });

        return layout;
    }

    areChildrenSameColumns(childrenA, childrenB) {
        if(childrenA.length === childrenB.length) {
            for(let i = 0; i < childrenA.length; i++) {
                const childA = childrenA[i];
                const childB = _.find(childrenB, { key: childA.key});

                const propsToPick = [
                    'xl', 'lg', 'md', 'sm', 'xs',
                    'xlH', 'lgH', 'mdH', 'smH', 'xsH',
                    'xlX', 'lgX', 'mdX', 'smX', 'xsX',
                    'xlY', 'lgY', 'mdY', 'smY', 'xsY'
                ];

                const colsA = _.pick(childA.props, propsToPick);
                const colsB = _.pick(childB.props, propsToPick);

                if(!_.isEqual(colsA, colsB)) {
                    return false;
                }
            }
        }
        return true;
    }

    triggerResize() {
        window.dispatchEvent(new Event('resize'));
    }

    getColumnSizes(columnsSizes = this.props.columnsSizes) {
        return (columnsSizes && !_.isEmpty(columnsSizes))
            ? columnsSizes : Row.defaultProps.columnsSizes;
    }

    componentDidUpdate(prevProps) {
        // Update layout if columns has been changed
        const currentChildren = simplifyChildrenArray(this.props.children);
        const previousChildren = simplifyChildrenArray(prevProps.children);
        const originalColumns = this.getColumnSizes(prevProps.columnsSizes);
        const nextState = { };

        // Check if columns changed and add to new state if are
        if(!_.isEqual(this.props.columnsSizes, this.state.columns)) {
            nextState.columns = this.calcColumns(this.props.children, originalColumns);
            // Notify if columns were optimized
            if(!_.isEqual(nextState.columns, this.getColumnSizes(this.props.columnsSizes))) {
                this.props.onColumnsOptimized(nextState.columns);
            }
        }

        // Check if children sizes / positions are different and add them if are
        if(!this.areChildrenSameColumns(previousChildren, currentChildren)) {
            nextState.layouts = this.calcLayout(currentChildren, nextState.columns || this.state.columns, originalColumns);
        }

        this.setState(nextState);
    }

    render() {
        const { columns, layouts } = this.state;
        const { active, children } = this.props;
        const responsiveGridProps = _.pick(this.props, reactGridLayoutProps);

        const modifiedChildren = simplifyChildrenArray(React.Children.map(children, child => (
            React.cloneElement(child, {
                active,
            })
        )));

        // Force layout reflow after render
        setTimeout(() => {
            this.triggerResize();
        }, 0);

        return (
            active ? (
                <ResponsiveGrid
                    cols={ columns }
                    breakpoints={ responsiveBreakpoints }
                    layouts={ layouts }
                    padding={ [ 0, 0 ] }
                    margin={ [ 0, 0 ] }
                    onLayoutChange={ (currentLayout, allLayouts) => this.layoutChanged(currentLayout, allLayouts) }
                    onBreakpointChange={ newBreakpoint => this.currentLayout = newBreakpoint }
                    { ...responsiveGridProps }
                >
                    { modifiedChildren }
                </ResponsiveGrid>
            ) : (
                <BootstrapRow>
                    { modifiedChildren }
                </BootstrapRow>
            )
        );
    }
}
