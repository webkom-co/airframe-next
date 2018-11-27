import React from 'react';

const NestedRoute = () => (
    <div>
        This route will be loaded lazily by the browser, because of the <code>prefetch={'{'} false {'}'}</code> prop
        set on the SidebarMenu Link.
    </div>
);

export default NestedRoute;