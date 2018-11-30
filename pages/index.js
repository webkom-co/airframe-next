import React from 'react';

class Index extends React.Component {
    render() {
        return (
            <section>
                <h1>Welcome to the Starter Template</h1>
                <p>
                    You can start your new application using this project. You have all of the nescessary components to do so: Reactstrap, Next.js, Recharts and other 3rd party plugins which are styled properly for this template.
                </p>
                <p>
                    You can add more pages just like in any other next.js project - by populating the `/pages` folder with Page Components. Sidebar entries and the rest of the layout can be modified in the `/features/Layout` module.
                </p>
            </section>
        )
    }
}

export default Index;
