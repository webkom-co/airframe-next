import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Card,
    CardBody,
    Badge,
    CardFooter,
    Progress,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

const ProjectsCardGrid = () => (
    <React.Fragment>
            { /* START Card */}
            <Card>
                <CardBody>
                    <Badge pill color="success" className="mb-2">
                        Active
                    </Badge>
                    <div className="mb-2">
                        <a href="#" className="mr-2">
                            <i className="fa fa-fw fa-star-o"></i>
                        </a>
                        <Link to="/Tasks">
                            { faker.company.catchPhrase() }
                        </Link>
                    </div>
                    <span>
                        Last Edited by: { faker.name.firstName() } { faker.name.lastName() } <br />
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                    </span>
                </CardBody>
                <CardFooter>
                    <Progress value={2 * 5} style={{height: "5px"}} className="mb-2" />
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
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        className="mr-2"
                    />
                    <Avatar.Image
                        size="md"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        className="mr-2"
                    />
                    <Avatar.Image
                        size="md"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
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
