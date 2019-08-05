import React from 'react';
import Router from 'next/router';

class Index extends React.Component {
    static getInitialProps({ res }) {
        if (res) {
            res.writeHead(301, {Location: `/layouts/sidebar`});
            res.end();
        } else {
            Router.push('/layouts/sidebar');
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}


export default Index;
