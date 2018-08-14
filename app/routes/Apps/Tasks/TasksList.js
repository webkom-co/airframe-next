import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Badge,
    Avatar,
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardFooter,
    Table,
    UncontrolledButtonDropdown,
    CustomInput,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../../components';

const TasksList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">#</th>
                        <th className="align-middle bt-0">Priority</th>
                        <th className="align-middle bt-0">Title & Description</th>
                        <th className="align-middle bt-0">People</th>
                        <th className="align-middle bt-0">Update</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { /* START TR */}
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
                                <Badge pill color="primary mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                                <Badge pill color="secondary mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                            </p>
                        </td>
                        <td className="align-middle">
                            <Avatar.Image
                                size="sm"
                                className="mr-1"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                            <Avatar.Image
                                size="sm"
                                className="mr-1"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
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

export default TasksList;
