import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';

export default class Page extends React.Component {
    static propTypes = {
        statusCode: PropTypes.number
    }

    static async getInitialProps({ res }) {
        if (res) {
            if (res.statusCode === 404) {
                res.writeHead(301, {Location: `/pages/error-404`});
                res.end();
            }

            return { statusCode: res.statusCode }
        }
        return { };
    }

    render() {
        return <Error statusCode={this.props.statusCode || 500} />
    }
}