import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    AvatarAddOn,
    Media,
    Card,
    CardFooter,
    CustomInput,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../components';

import {
    Paginations
} from "../components/Paginations";

const UsersList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0"></th>
                        <th className="align-middle bt-0"></th>
                        <th className="align-middle bt-0">Name</th>
                        <th className="align-middle bt-0">Email</th>
                        <th className="align-middle bt-0">Phone</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { /* START TR */}
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
                                <Media left className="d-flex mr-3">
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
                                            <AvatarAddOn.Icon 
                                                className="fa fa-circle"
                                                color="primary"
                                                key="avatar-icon-bg"
                                            />,
                                            <AvatarAddOn.Icon 
                                                className="fa fa-facebook"
                                                color="white"
                                                key="avatar-icon-fg"
                                                small
                                            />
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
                { /* END TR */}
                </tbody>
            </Table>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center">
                <Paginations />
            </CardFooter>
        </Card>

);

export default UsersList;