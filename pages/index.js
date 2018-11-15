import React from 'react';
import Router from 'next/router';

class Index extends React.Component {
    static getInitialProps({ res }) {
        if (res) {
            res.writeHead(301, {Location: `/dashboards/projects`});
            res.end();
        } else {
            Router.push('/dashboards/projects');
        }
    }

    render() {
        return <div></div>
    }
}


export default Index;
