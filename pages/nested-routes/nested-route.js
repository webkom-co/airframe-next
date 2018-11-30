import React from 'react';

const NestedRoute = () => (
    <section>
        <h1>Lazily Loaded Route</h1>

        <p>
            This route will be loaded lazily by the browser, because of the <code>prefetch={'{'} false {'}'}</code> prop is
            set on the SidebarMenu Link.
        </p>
    </section>
);

export default NestedRoute;