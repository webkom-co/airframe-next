import React from 'react';
import PropTypes from 'prop-types';
import { FooterText } from './FooterText';

const FooterAuth = ({ className }) => (
    <div className={ className }>
        <p className="small">
            <FooterText />
        </p>
    </div>
);

FooterAuth.propTypes = {
    className: PropTypes.string
};

export { FooterAuth };
