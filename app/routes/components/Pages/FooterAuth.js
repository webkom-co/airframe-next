import React from 'react';
import PropTypes from 'prop-types';

const FooterAuth = (props) => (
    <div>
        <p className="small text-muted">
            (C) { props.year } All Rights Reserved. 
            This is the Admin Theme built from Bootstrap 4. 
            Designed and implemented by <a href="http://www.webkom.co" target="_blank"> www.webkom.co</a>
        </p>
    </div>
)
FooterAuth.propTypes = {
    year: PropTypes.node
};
FooterAuth.defaultProps = {
    year: "2018"
};

export { FooterAuth };
