import React from 'react';
import { DropdownContext } from 'reactstrap/lib/DropdownContext';
import Link from './../Link';

const ExtendedDropdownLink = (props) => {
    const { children, ...otherProps } = props;

    return (
        <DropdownContext.Consumer>
        {
            ({ toggle }) => (
                <Link { ...otherProps } onClick={ () => { toggle(); } }>
                    { children }
                </Link>
            )
        }
        </DropdownContext.Consumer>        
    );
};
ExtendedDropdownLink.propTypes = { ...Link.propTypes };
ExtendedDropdownLink.defaultProps = { ...Link.defaultProps };

export { ExtendedDropdownLink };
