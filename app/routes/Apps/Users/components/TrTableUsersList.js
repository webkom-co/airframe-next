import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Media,
    Avatar,
    AvatarAddOn,
    CustomInput,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../../components';

import { randomArray } from './../../../../utilities';

const TrTableUsersList = () => {

    const avatar = [
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="facebook"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-facebook"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="twitter"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-twitter"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="linkedin"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-linkedin"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="foursquare"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-foursquare"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
        [
            <AvatarAddOn.Icon 
                className="fa fa-circle"
                color="paypal"
                key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon 
                className="fa fa-paypal"
                color="white"
                key="avatar-icon-fg"
                small
            />
        ],
    ];
    return (
        <React.Fragment>
            <tr>
             <td className="align-middle">
                <CustomInput type="checkbox" id="usersList1" label="" inline />
             </td>
             <td className="align-middle">
                <a href="#">
                    <i className="fa fa-fw fa-star-o"></i>
                </a>
             </td>
                <td>
                    <Media>
                        <Media left className="d-flex align-self-center mr-3">
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="align-self-center"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    ...randomArray(avatar)
                                ]}
                            /> 
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
                     { faker.internet.email() }   
                </td>
                <td className="align-middle">
                     { faker.phone.phoneNumberFormat() }   
                </td>
                <td className="align-middle text-right">
                    <UncontrolledButtonDropdown>
                        <DropdownToggle color="secondary" outline caret>
                            <i className="fa fa-bars"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <i className="fa fa-fw fa-phone mr-2"></i>
                                Call
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-comment mr-2"></i>
                                Chat
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-video-camera mr-2"></i>
                                Video
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-user mr-2"></i>
                                Profile
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-fw fa-pencil mr-2"></i>
                                Edit
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <i className="fa fa-fw fa-trash mr-2"></i>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </td>
            </tr>
        </React.Fragment>
    )
}

export { TrTableUsersList };
