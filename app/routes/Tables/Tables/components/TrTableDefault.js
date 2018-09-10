import React from 'react';
import faker from 'faker';
import _ from 'lodash';

import { 
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../../components';

/*eslint-disable */
const avatarStatus = [
    <Avatar.Image
        size="md"
        src="http://bs4.webkom.co/img/avatars/2.jpg"
        addOns={[
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="white"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="danger"
                key="avatar-icon-fg"
            />
        ]}
    /> ,
    <Avatar.Image
        size="md"
        src="http://bs4.webkom.co/img/avatars/2.jpg"
        addOns={[
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="white"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="success"
                key="avatar-icon-fg"
            />
        ]}
    /> ,
    <Avatar.Image
        size="md"
        src="http://bs4.webkom.co/img/avatars/2.jpg"
        addOns={[
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="white"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="warning"
                key="avatar-icon-fg"
            />
        ]}
    /> ,
    <Avatar.Image
        size="md"
        src="http://bs4.webkom.co/img/avatars/2.jpg"
        addOns={[
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="white"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="secondary"
                key="avatar-icon-fg"
            />
        ]}
    /> 
];
/*eslint-enable */

const TrTableDefault = () => (
    <React.Fragment>
        {
            _.times(4, (index) => (
                <tr>
                    <td className="align-middle">
                        <div className="text-inverse">
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span>
                            { faker.company.companyName() }
                        </span>
                    </td>
                    <td className="align-middle">
                        <div>
                            Thursday
                        </div>
                        <span className="text-danger">
                            Overdue
                        </span>
                    </td>
                    <td className="align-middle">
                        <Media>
                            <Media left middle className="mr-3">
                                { avatarStatus[index%4] } 
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span>
                                    { faker.name.jobTitle() }
                                </span>
                            </Media>
                        </Media>
                    </td>
                    <td className="align-middle">
                        <div>
                            { faker.finance.amount() }
                        </div>
                        <span>
                            Paid
                        </span>
                    </td>
                    <td className="align-middle">
                        <i className="fa fa-circle-o text-success mr-2"></i>
                        { faker.finance.transactionType() }
                    </td>
                    <td className="align-middle text-right">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle color="secondary" outline caret>
                                <i className="fa fa-gear"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-envelope mr-2"></i>
                                    Send Email
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-phone mr-2"></i>
                                    Call
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-user mr-2"></i>
                                    Profile
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableDefault };
