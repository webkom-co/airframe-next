import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardImg,
    HolderProvider,
    Media,
    Avatar,
    UncontrolledTooltip,
    AvatarAddOn,
    Badge,
    CardFooter,
    CardBody
} from './../../../components';

const GalleryCard = () => (
    <React.Fragment>
        { /* START Card */}
        <Card className="mb-3">
            <HolderProvider.Icon
                iconChar=""
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
                        <span href="#">
                            { faker.system.fileName() }
                        </span>
                    </span>
                    <a href="#" className="ml-auto" id="tooltipDownload">
                        <i className="fa fa-download"></i>
                    </a>
                    <UncontrolledTooltip placement="top" target="tooltipDownload">
                       Download
                    </UncontrolledTooltip>
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
                                    color="danger"
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
                <Badge pill color="primary" className="mr-1">
                    { faker.commerce.department() }
                </Badge>
                <Badge pill color="secondary" className="mr-1">
                    { faker.commerce.department() }
                </Badge>
                <Badge pill color="secondary" className="mr-1">
                    { faker.commerce.department() }
                </Badge>
            </CardFooter>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

export { GalleryCard };
