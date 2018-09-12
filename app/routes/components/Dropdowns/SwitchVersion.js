import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    DropdownMenu,
    DropdownItem
} from './../../../components';

const SwitchVersion = () => (
    <React.Fragment>
        <DropdownMenu>
            <DropdownItem header>
                Bootstrap 4 Versions:
            </DropdownItem>
            <DropdownItem href="http://jquery.bs4.webkom.co" className="d-flex">
                <span>
                    Jquery 2.0.0 <small>(npm)</small>
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem href="http://react.bs4.webkom.co" active className="d-flex">
                <span>
                    React 2.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw fa-check ml-auto align-self-center pl-4" />
            </DropdownItem>
            <DropdownItem href="http://angular.bs4.webkom.co" className="d-flex">
                <span>
                    Angular 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>
                Other Products
            </DropdownItem>
            <DropdownItem href="http://bs4.webkom.co" className="d-flex">
                <i className="fa fa-send fa-fw mr-3 align-self-center" />
                <span>
                    bs4.webkom.co <small>(Jekyll)</small>
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
            </DropdownItem>
            <DropdownItem href="http://spin.webkom.co/v2" className="d-flex">
                <i className="fa fa-bandcamp fa-fw mr-3 align-self-center" />
                <span>
                    spin.webkom.co/v2 <small>(Jekyll)</small>
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { SwitchVersion };
