import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    Progress,
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardFooter,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../components';

const ProjectsList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">Star</th>
                        <th className="align-middle bt-0">Project</th>
                        <th className="align-middle bt-0">Status</th>
                        <th className="align-middle bt-0">Tasks Completed</th>
                        <th className="align-middle bt-0">People</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { /* START TR */}
                    <tr>
                        <td className="align-middle">
                            <div className="text-inverse">
                                <a href="#">
                                    <i className="fa fa-fw fa-star-o"></i>
                                </a>
                            </div>
                        </td>
                        <td className="align-middle">
                            <div>
                                <a href="#">
                                    { faker.company.catchPhrase() }
                                </a>
                            </div>
                            <span>
                                Last Edited by: { faker.name.firstName() } { faker.name.lastName() } <br />
                                { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                            </span>
                        </td>
                        <td className="align-middle">
                            <Badge pill color="success">
                                Success
                            </Badge>
                        </td>
                        <td className="align-middle">
                            <Progress value={2 * 5} style={{height: "5px"}} className="mb-2" />
                            <div>
                                Tasks Completed: 
                                <span className="text-inverse">
                                    36/94
                                </span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                        </td>
                        <td className="align-middle text-right">
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="secondary" outline caret>
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
                { /* END TR */}
                </tbody>
            </Table>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous href="#">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#">
                            <i className="fa fa-fw fa-angle-right"></i>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </CardFooter>
        </Card>

);

export default ProjectsList;