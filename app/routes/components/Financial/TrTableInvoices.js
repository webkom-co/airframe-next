import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import {  
    Media, 
    Avatar,
    AvatarAddOn
} from './../../../components';

import { randomAvatar } from './../../../utilities';

const TrTableInvoices = () => (
    <React.Fragment>
        {
            _.times(6, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <span className="text-inverse">{ faker.company.companyName() }</span>
                    </td>
                    <td className="align-middle">
                        ${ faker.commerce.price() }
                    </td>
                    <td className="align-middle">
                        25-May-2018
                    </td>
                    <td className="align-middle">
                        <Media>
                            <Media left className="align-self-center mr-4">
                                <Avatar.Image
                                    size="md"
                                    src={ randomAvatar() }
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
                                /> 
                            </Media>
                            <Media body>
                                <span className="d-flex mb-1">
                                    <span className="mt-0 d-flex h6 mb-0">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                </span>
                                <p className="mb-0">
                                    { faker.name.jobTitle() }
                                </p>
                            </Media>
                        </Media>
                    </td>
                    <td className="align-middle">
                        <a href="#">
                            { faker.internet.exampleEmail() }
                        </a><br />
                        { faker.phone.phoneNumber() }
                    </td>
                    <td className="text-right align-middle">
                        <a href="#">View <i className="fa fa-angle-right"></i></a>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableInvoices };
