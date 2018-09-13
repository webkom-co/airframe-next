import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardBody,
    Badge,
    CardFooter,
    HolderProvider,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    CardImg,
    DropdownMenu,
    DropdownItem
} from './../../../components';

import { randomArray, randomAvatar } from './../../../utilities';

const badges = [
    "secondary",
    "success",
    "warning",
    "info",
    "secondary",
    "primary"
];

const FilesCardGrid = () => (
    <React.Fragment>
            { /* START Card */}
            <Card>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                >
                    <CardImg />
                </HolderProvider.Icon>
                <CardBody>
                    <h6 className="mb-2">
                        { faker.commerce.productName() }   
                    </h6>
                    <span className="mb-2">
                        { faker.finance.amount() } Mb
                    </span>
                    <div>
                        { faker.system.commonFileName() }<br />
                        { faker.internet.userName() }<br />
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018<br />
                        12:34 PM
                    </div>
                </CardBody>
                <CardFooter>
                    <Badge color={ randomArray(badges) } pill className="mr-1">
                        { faker.commerce.department() }   
                    </Badge>
                    <Badge color={ randomArray(badges) } pill className="mr-1">
                        { faker.commerce.department() }   
                    </Badge>
                    <Badge color={ randomArray(badges) } pill className="mr-1">
                        { faker.commerce.department() }   
                    </Badge>
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
                    <a href="#" className="align-self-center">
                        Details<i className="fa fa-fw fa-angle-right ml-1"></i>
                    </a>
                    <UncontrolledButtonDropdown className="align-self-center ml-auto">
                        <DropdownToggle color="secondary" outline caret size="sm">
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
                </CardFooter>
            </Card>
            { /* END Card */}
    </React.Fragment>
)

export { FilesCardGrid };
