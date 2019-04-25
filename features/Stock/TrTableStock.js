import React from 'react';
import _ from 'lodash';
import { randomArray } from './../../core/utilities';

const name = [
    <React.Fragment key="name-1">
        Caterpillar <small className="text-muted">(CAT)</small>
    </React.Fragment>,
    <React.Fragment key="name-2">
        Google <small className="text-muted">(GOOGL)</small>
    </React.Fragment>,
    <React.Fragment key="name-3">
        Microsoft <small className="text-muted">(MSFT)</small>
    </React.Fragment>,
    <React.Fragment key="name-4">
        Apple <small className="text-muted">(AAPL)</small>
    </React.Fragment>,
    <React.Fragment key="name-5">
        Samsung Electronics <small className="text-muted">(0593xq)</small>
    </React.Fragment>
];

const percentForPrice = [
    "34.18",
    "21.34",
    "19.12",
    "67.82"
];
const score = [
    "87",
    "11",
    "12"
];
const q = [
    "35",
    "98",
    "56"
];
const v = [
    "17",
    "38",
    "23"
];
const g = [
    "45",
    "15",
    "16"
];

const price = [
    <React.Fragment key="price1">
        <span className="text-success">
            <i className="fa fa-caret-up mr-1"></i> { randomArray(percentForPrice) }%
        </span>
    </React.Fragment>,
    <React.Fragment key="price2">
        <span className="text-danger">
            <i className="fa fa-caret-down mr-1"></i> { randomArray(percentForPrice) }%
        </span>
    </React.Fragment>
];

const TrTableStock = () => {
    return (
        <React.Fragment>
            {
                _.times(5, (index) => (
                    <tr key={ index }>
                        <td className="align-middle">
                            { randomArray(name) }
                        </td>
                        <td className="align-middle text-right">
                            { randomArray(price) }
                        </td>
                        <td className="align-middle text-right">
                            { randomArray(score) }
                        </td>
                        <td className="align-middle text-right">
                            { randomArray(q) }
                        </td>
                        <td className="align-middle text-right">
                            { randomArray(v) }
                        </td>
                        <td className="align-middle text-right">
                            { randomArray(g) }
                        </td>
                    </tr>
                ))
            }
        </React.Fragment>)
}

export { TrTableStock };
