import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Badge,
    Avatar,
    CustomInput,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
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

const TrTableTasksList = () => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <CustomInput type="checkbox" id="tasksList1" label="" inline />
            </td>
            <td className="align-middle">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="secondary" outline caret size="sm">
                        <i className="fa fa-circle text-success mr-2"></i>
                        Small 
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Select Priority</DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-danger mr-2"></i>
                            Big 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-warning mr-2"></i>
                            High 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-primary mr-2"></i>
                            Normal 
                        </DropdownItem>
                        <DropdownItem active>
                            <i className="fa fa-circle text-success mr-2"></i>
                            Small 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </td>
            <td className="align-middle">
                <div>
                    <span className="mr-2">#{ faker.random.number() }</span>
                    <Link to="/apps/task-details">
                        { faker.hacker.phrase() }
                    </Link>
                </div>
                <p className="mb-0">
                    <span className="mr-2">
                        { faker.lorem.sentence() }
                    </span>
                    <Badge pill color={ randomArray(badges) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badges) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                </p>
            </td>
            <td className="align-middle">
                <Avatar.Image
                    size="sm"
                    className="mr-1"
                    src={ randomAvatar() }
                />
                <Avatar.Image
                    size="sm"
                    className="mr-1"
                    src={ randomAvatar() }
                />
            </td>
            <td className="align-middle">
                16-Jul-2016
            </td>
            <td className="align-middle text-right">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="secondary" outline size="sm" caret>
                        <i className="fa fa-gear"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <i className="fa fa-fw fa-folder-open mr-2"></i>
                            View
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-ticket mr-2"></i>
                            Add Task
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-paperclip mr-2"></i>
                            Add Files
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

export { TrTableTasksList };
