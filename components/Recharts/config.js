// ReCharts styling configuration
import colors from './../../core/colors';

export default {
    grid: {
        stroke: colors['400'],
        strokeWidth: 1,
        strokeDasharray: '3px'
    },
    polarGrid: {
        stroke: colors['400'],
    },
    axis: {
        stroke: colors['600'],
        strokeWidth: 2,
        style: {
            fontSize: '12px'
        },
        tick: {
            fill: colors['900']
        }
    },
    polarRadiusAxis: {
        stroke: colors['400'],
        tick: {
            fill: colors['danger']
        }
    },
    polarAngleAxis: {
        tick: {
            fill: colors['900']
        },
        style: {
            fontSize: '12px'
        }
    },
    label: {
        fontSize: 10,
        fill: colors['600']
    },
    pieLabel: {
        fontSize: 12,
        fill: colors[100]
    },
    tooltip: {
        cursor: {
            fill: colors['light-08']
        }
    }
};