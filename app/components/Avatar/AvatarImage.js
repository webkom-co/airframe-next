import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from './Avatar';
import { AvatarFont } from './AvatarFont';

import classes from './AvatarImage.scss';

class AvatarImage extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        placeholder: PropTypes.node,
        alt: PropTypes.string,
        ...Avatar.propTypes
    };

    static defaultProps = {
        placholder: <i className="fa fa-user fa-fw"></i>
    }

    constructor(props) {
        super(props);
        
        this.state = {
            imgLoaded: false
        };
    }

    render() {
        const parenClass = classNames(classes['avatar-image'], {
            [classes['avatar-image--loaded']]: this.state.imgLoaded
        });

        return (
            <div className={ parentClass }>
                <Avatar className={ classes['avatar-image__image'] }>
                    <img
                        src={ this.props.src }
                        alt={ this.props.alt }
                        onLoad={ () => { this.setState({ imgLoaded: true }) } }
                    />
                </Avatar>
                {
                    !this.state.imgLoaded && (
                        <AvatarFont className={ classes['avatar-image__placeholder'] }>
                            { this.props.placeholder }
                        </AvatarFont>
                    )
                }
            </div>
        )
    }
}

export { AvatarImage };
