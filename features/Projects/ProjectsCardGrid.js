import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardBody,
    Badge,
    CardFooter,
    Progress,
    Avatar,
    Link,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../components';

import { randomArray, randomAvatar } from './../../core/utilities';

const badges = [
    <Badge pill color="success" className="mb-2" key="badge-active">
        Active
    </Badge>,
    <Badge pill color="danger" className="mb-2" key="badge-suspended">
        Suspended
    </Badge>,
    <Badge pill color="warning" className="mb-2" key="badge-waiting">
        Waiting
    </Badge>,
    <Badge pill color="secondary" className="mb-2" key="badge-paused">
        Paused
    </Badge>,
];

const taskCompleted = [
    "15",
    "28",
    "30",
    "80",
    "57",
    "90"
];

const ProjectsCardGrid = () => (
    <React.Fragment>
            { /* START Card */}
            <Card>
                <CardBody>
                    { randomArray(badges) }
                    <div className="mb-2">
                        <a href="#" className="mr-2">
                            <i className="fa fa-fw fa-star-o"></i>
                        </a>
                        <Link to="/apps/tasks/grid">
                            { faker.company.catchPhrase() }
                        </Link>
                    </div>
                    <span>
                        Last Edited by: { faker.name.firstName() } { faker.name.lastName() } <br />
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                    </span>
                </CardBody>
                <CardFooter>
                    <Progress value={ randomArray(taskCompleted) } style={{height: "5px"}} className="mb-2" />
                    <div>
                        Tasks Completed: 
                        <span className="text-inverse">
                            36/94
                        </span>
                    </div>
                </CardFooter>
                <CardFooter>
                    <Avatar.Image
                        size="md"
                        src={ randomAvatar() }
                        className="mr-2"
                    />
                    <Avatar.Image
                        size="md"
                        src={ randomAvatar() }
                        className="mr-2"
                    />
                    <Avatar.Image
                        size="md"
                        src={ randomAvatar() }
                        className="mr-2"
                    />
                </CardFooter>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        20 Sep, Fri, 2018
                    </span>
                    <UncontrolledButtonDropdown className="align-self-center ml-auto">
                        <DropdownToggle color="secondary" outline caret size="sm">
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
                </CardFooter>
            </Card>
            { /* END Card */}
    </React.Fragment>
)

export { ProjectsCardGrid };
