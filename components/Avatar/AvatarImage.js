import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import { Avatar } from './Avatar';
import { AvatarFont } from './AvatarFont';

class AvatarImage extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        placeholder: PropTypes.node,
        alt: PropTypes.string,
        className: PropTypes.string,
        ..._.omit(Avatar.propTypes, ['children'])
    };

    static defaultProps = {
        placeholder: <i className="fa fa-user fa-fw"></i>
    }

    imgRef = React.createRef();

    constructor(props) {
        super(props);
        
        this.state = {
            imgLoaded: false
        };
    }

    componentDidMount() {
        const img = this.imgRef.current;

        if (img.complete && img.naturalWidth > 0) {
            this.setState({ imgLoaded: true });
        }
    }

    render() {
        const { src, placeholder, alt, className, ...avatarProps } = this.props;
        const parentClass = classNames('avatar-image', {
            'avatar-image--loaded': this.state.imgLoaded
        }, className);

        return (
            <div className={ parentClass }>
                <Avatar className="avatar-image__image" {...avatarProps}>
                    <img
                        ref={ this.imgRef }
                        src={ src }
                        alt={ alt }
                        onLoad={ () => { this.setState({ imgLoaded: true }) } }
                    />
                </Avatar>
                {
                    !this.state.imgLoaded && (
                        <AvatarFont className="avatar-image__placeholder" {...avatarProps}>
                            { placeholder }
                        </AvatarFont>
                    )
                }
            </div>
        )
    }
}

export { AvatarImage };
