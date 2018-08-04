import React from 'react';
import PropTypes from 'prop-types';

const HeaderAuth = (props) => (
    <div className="mb-4">
        <div className="mb-4 text-center">
            <a href="/">
                <i className="fa fa-send fa-3x text-primary"></i>
            </a>
        </div>
        <h5 className="text-center mb-4">
            { props.title }
        </h5>
        <p className="text-center">
            { props.text }
        </p>
    </div>
)
HeaderAuth.propTypes = {
    title: PropTypes.node,
    text: PropTypes.node,
};
HeaderAuth.defaultProps = {
    title: "Waiting for Data...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptas aperiam odit, reiciendis dicta nihil."
};

export { HeaderAuth };
