import React from 'react';

import {
    Container
} from './../../components';

const NestedRoute = () => (
    <Container>
        <section>
            <h1 className="mb-4">Lazily Loaded Route</h1>

            <p>
                This route will be loaded lazily by the browser, because of the <code>prefetch={'{'} false {'}'}</code> prop is
                set on the SidebarMenu Link.
            </p>
        </section>
    </Container>
);

export default NestedRoute;