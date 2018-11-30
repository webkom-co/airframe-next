import React from 'react';

import {
    Container
} from './../../../components';

const DeepNestedRouteOne = () => (
    <Container>
        <section>
            <h1>
                First Eagerly Loaded Route
            </h1>
            <p>
                Hello from the first eagerly loaded, deeply nested route.
            </p>
        </section>
    </Container>
);

export default DeepNestedRouteOne;