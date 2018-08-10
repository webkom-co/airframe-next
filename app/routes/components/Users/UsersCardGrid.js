import React from 'react';

import { 
    Card,
    CardBody,
    Button,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

import {
    Profile
} from "./../Profile";

const UsersCardGrid = () => (
    <React.Fragment>
        { /* START Card */}
        <Card>
            <CardBody>
                <div className="d-flex">
                    <Button color="link" size="sm" id="tooltipAddToFavorites">
                        <i className="fa fa-star-o"></i>
                    </Button>
                    <UncontrolledTooltip placement="right" target="tooltipAddToFavorites">
                        Add To Favorites
                    </UncontrolledTooltip>
                    <UncontrolledButtonDropdown className="ml-auto">
                        <DropdownToggle color="link" caret size="sm">
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
                </div>
                <Profile />
            </CardBody>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

export { UsersCardGrid };
