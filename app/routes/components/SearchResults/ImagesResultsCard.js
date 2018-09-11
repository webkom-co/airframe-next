import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardImg,
    HolderProvider,
    Media,
    Avatar,
    AvatarAddOn,
    CardFooter,
    CardBody
} from './../../../components';

import { randomArray } from './../../../utilities';

const status = [
    "danger",
    "success",
    "warning",
    "secondary"
];

const ImagesResultsCard = () => (
    <React.Fragment>
        { /* START Card */}
        <Card className="mb-3">
            <HolderProvider.Icon
                iconChar=""
                size={ 32 }
            >
            <CardImg />
            </HolderProvider.Icon>
            <CardBody>
                <div className="d-flex mb-3">
                    <span>
                        <a className="h6">
                            { faker.commerce.productName() }
                        </a>
                        <br />
                        <a href="#" className="text-success">
                            { faker.internet.url() }
                        </a>
                    </span>
                    <a href="#" className="ml-auto">
                        <i className="fa fa-external-link"></i>
                    </a>
                </div>
                <Media>
                    <Media left className="align-self-center mr-3">
                        <Avatar.Image
                            size="md"
                            src="http://bs4.webkom.co/img/avatars/2.jpg"
                            addOns={[
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color={ randomArray(status) }
                                    key="avatar-icon-fg"
                                />
                            ]}
                        /> 
                    </Media>
                    <Media body>
                        <div className="mt-0 d-flex">
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span>
                            { faker.address.state() }, { faker.address.stateAbbr() }
                        </span>
                    </Media>
                </Media>
            </CardBody>
            <CardFooter>
                <span className="mr-3">
                    <i className="fa fa-eye mr-1"></i> 233 
                </span>
                <span>
                    <i className="fa fa-heart-o mr-1"></i> 98 
                </span>
            </CardFooter>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

export { ImagesResultsCard };
