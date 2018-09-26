import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    Media,
    DropdownItem
} from './../../../../components';

import { randomArray, randomAvatar } from './../../../../utilities';

const badges = [
    "secondary",
    "success",
    "warning",
    "info",
    "secondary",
    "primary"
];

const TrTableFilesList = () => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <Media>
                    <Media left middle>
                       <i className="fa fa-fw fa-folder-o fa-3x mr-2"></i>
                    </Media>
                    <Media body>
                        <div className="text-inverse">
                            { faker.commerce.department() }   
                        </div>
                        <span>
                            { faker.finance.amount() } Mb
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                { faker.date.weekday() }, 12 { faker.date.month() }, 2018<br />
                12:23 PM
            </td>
            <td className="align-middle">
                <Avatar.Image
                    size="md"
                    src={ randomAvatar() }
                />
            </td>
            <td className="align-middle">
                <Badge color={ randomArray(badges) } pill className="mr-1">
                    { faker.commerce.department() }   
                </Badge>
                <Badge color={ randomArray(badges) } pill className="mr-1">
                    { faker.commerce.department() }   
                </Badge>
                <Badge color={ randomArray(badges) } pill className="mr-1">
                    { faker.commerce.department() }   
                </Badge>
            </td>
            <td className="align-middle text-right">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="secondary" outline caret>
                        <i className="fa fa-gear"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <i className="fa fa-fw fa-reply mr-2"></i>
                            Share
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-download mr-2"></i>
                            Download
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-trash mr-2"></i>
                            Delete
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-pencil mr-2"></i>
                            Edit
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <i className="fa fa-fw fa-files-o mr-2"></i>
                            Copy
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </td>
        </tr>
    </React.Fragment>
)

export { TrTableFilesList };
