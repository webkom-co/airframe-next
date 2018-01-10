import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './../styles/main.scss';

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <div id="layout-container">
                <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/splitted">
                        Splitted
                    </Link>
                    <Link to="/params/0">
                        Params
                    </Link>
                    <Link to="/redux-example">
                        Redux Example
                    </Link>
                </div>

                <div>
                    { children }
                </div>
            </div>
        )        
    }
}

export default Layout;