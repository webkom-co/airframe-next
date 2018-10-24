import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    WidthProvider,
    Responsive
} from 'react-grid-layout';

const ResponsiveGrid = WidthProvider(Responsive);

const responsiveBreakpoints = {
    xl: 1199, lg: 991, md: 767, sm: 576, xs: 0
};
const breakPointSteps = _.keys(responsiveBreakpoints);

const TOTAL_ROW = 12;

export class Row extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        columns: PropTypes.object,
        onLayoutChange: PropTypes.func,
        rowHeight: PropTypes.number
    };

    static defaultProps = {
        rowHeight: 100
    };

    _lastChildren = null;
    _lastGeneratedLayouts = null;

    render() {
        const { children, rowHeight, onLayoutChange } = this.props;
        const layouts = this._calculateLayouts(children);

        return (
            <ResponsiveGrid
                cols={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
                breakpoints={ responsiveBreakpoints }
                layouts={ layouts }
                padding={ [ 0, 0 ] }
                margin={ [ 0, 0 ] }
                rowHeight={ rowHeight }
                onLayoutChange={(currentLayout, allLayouts) => {
                    onLayoutChange(this._transformForChangeHandler(allLayouts))
                }}
                onBreakpointChange={ newBreakpoint => this.currentLayout = newBreakpoint }
            >
                { children }
            </ResponsiveGrid>
        );
    }

    /**
     * Finds the nearest breakpoint relative to the one provided in the
     * first param. For example - when the `definition` param contains
     * such bps - { md: 6, xs: 8 }, for `breakpoint` - xl/md will return 6
     */
    _findClosestBreakpoint = (breakpoint, definition) => {
        let found = 12;
        for (let bp of _.drop(breakPointSteps, _.indexOf(breakPointSteps, breakpoint))) {
            if (!_.isUndefined(definition[bp])) {
                found = definition[bp];
            }
        }
        return found;
    }

    _calculateLayouts = (children) => {
        let output = { };
        const childrenArray = React.Children.toArray(children);
        for (let breakPoint of breakPointSteps) {
            let rowChildren = [];
            let rowCounter = 0;
            let y = 0;
            for (let child of childrenArray) {
                let bpData = { };
                // Save the props for current child and breakpoint
                const config = _.pick(child.props, [
                    'i',
                    'h', 'minH', 'maxH',
                    breakPoint, `${breakPoint}MinW`, `${breakPoint}MaxW`,
                    'moved', 'static', 'isResizable', 'isDraggable'
                ]);
                // Calculate the needed definition
                bpData = Object.assign(bpData, {
                    ...config,
                    // Add default heights when none provided
                    ...{
                        // Set the x to the calculated value or take from the 
                        // props if defined for controlled type
                        x: _.isUndefined(child.props[`${breakPoint}X`]) ?
                            rowCounter : child.props[`${breakPoint}X`],
                        h: config.h || 1,
                        minH: config.minH || (config.h || 1),
                        maxH: config.maxH || (config.h || 1),
                    },
                    w: config[breakPoint] ||
                        this._findClosestBreakpoint(breakPoint, child.props),
                    // Set the y to the calculated value or take from the 
                    // props if defined for controlled type
                    y: _.isUndefined(child.props[`${breakPoint}Y`]) ?
                        y : child.props[`${breakPoint}Y`]
                });
                rowChildren = [...rowChildren, bpData];
                rowCounter += bpData.w;
                if (rowCounter + bpData.x > TOTAL_ROW) {
                    // Increase by the largest found height
                    y += _.max(_.map(rowChildren, 'h'));
                    rowCounter = 0;
                    rowChildren = [];
                }
                output = {
                    ...output,
                    [breakPoint]: [...(output[breakPoint] || []), bpData]
                }
            }
        }
        return output;
    }

    /**
     * Transform the calculated layout to a structure
     * which is provided by `layouts` props
     */
    _transformForChangeHandler = (layouts) => {
        let output = { };
        for (let breakPoint of breakPointSteps) {
            const bpLayout = layouts[breakPoint];
            for (let element of bpLayout) {
                output[element.i] = {
                    ...(output[element.i]),
                    ...(element),
                    [breakPoint]: element.w,
                    [`${breakPoint}X`]: element.x,
                    [`${breakPoint}Y`]: element.y
                }
            }
        }
        return output;
    }
}
