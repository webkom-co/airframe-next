import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    Media,
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

import {
    Paginations
} from "../components/Paginations";

const FilesList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">Directory</th>
                        <th className="align-middle bt-0">Last Change</th>
                        <th className="align-middle bt-0">Share</th>
                        <th className="align-middle bt-0">Tags</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { /* START TR */}
                    <tr>
                        <td className="align-middle">
                            <Media>
                                <Media left middle>
                                   <i className="fa fa-fw fa-folder-o fa-3x mr-2" object></i>
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
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                        </td>
                        <td className="align-middle">
                            <Badge color="primary" pill className="mr-1">
                                { faker.commerce.department() }   
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                                { faker.commerce.department() }   
                            </Badge>
                            <Badge color="secondary" pill className="mr-1">
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
                { /* END TR */}
                </tbody>
            </Table>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center">
                <Paginations />
            </CardFooter>
        </Card>

);

export default FilesList;