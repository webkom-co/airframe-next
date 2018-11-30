import React from 'react';

import {
    Container
} from './../components';

class Index extends React.Component {
    render() {
        return (
            <Container>
                <section>
                    <h1 className="mb-4">
                        Welcome to the Starter Template
                    </h1>
                    <p>
                        You can start your new application using this project. You have all of the nescessary components to do so: Reactstrap, Next.js, Recharts and other 3rd party plugins which are styled properly for this template.
                    </p>
                    <p>
                        You can add more pages just like in any other next.js project - by populating the <code>/pages</code> folder with Page Components. Sidebar entries and the rest of the layout can be modified in the <code>/features/Layout</code> module.
                    </p>
                </section>
            </Container>
        );
    }
}

export default Index;
