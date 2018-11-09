import React from 'react';
import Router from 'next/router';

class Index extends React.Component {
    static getInitialProps({res}) {
        res.writeHead(301, {Location: `/dashboards/projects`});
        res.end();
    }

    render() {
        return <div></div>
    }
}


export default Index;
