import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Params = (props) => {
    const { param } = props.match.params;
    const paramVal = parseInt(param);

    return (
        <div>
            <h1>
                Route with params <small>(param: { paramVal })</small>
            </h1>
            <Link to={`/params/${paramVal - 1}`}>-</Link>
            <Link to={`/params/${paramVal + 1}`}>+</Link>
        </div>
    )
}

Params.propTypes = {
    location: PropTypes.object.isRequired
}

export default Params;