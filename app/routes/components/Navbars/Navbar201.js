import React from 'react';

import { 
    Navbar,
    NavbarToggler
} from './../../../components';

import { NavbarNavigation } from
    '../Navbars/NavbarNavigation';

const Navbar201 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar navbar light  color="white" expand="md">
        <h5 className="d-xs-block d-md-none my-0">
            Navbar Only
        </h5>
        <NavbarToggler id="navbar-navigation-toggler" className="ml-auto pr-0 b-0">
            <i className="fa fa-fw fa-bars"></i>
        </NavbarToggler>
        <NavbarNavigation />
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)

export { Navbar201 };
