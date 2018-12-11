import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardImg,
    HolderProvider,
    Media,
    Avatar,
    AvatarAddOn,
    CardGroup,
    Button,
    Badge,
    CardBody
} from './../../components';

import { randomArray, randomAvatar } from './../../core/utilities';

const status = [
    "warning",
    "danger",
    "success",
    "secondary"
];
const stars = [
    <span key="stars5">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars2">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars1">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
];

const VideosResultsCard = () => (
    <React.Fragment>
        <CardGroup className="mb-3">
            <Card>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    height="100p"
                >
                    <CardImg style={{ minHeight: "200px" }} />
                </HolderProvider.Icon>
            </Card>
            <Card>
                <CardBody>
                    <div className="mr-3">
                        <div className="d-flex">
                            <div>
                                <div>
                                    <a href="#" className="h6 mb-0">
                                        { faker.commerce.productName() }
                                    </a>
                                </div>
                                <div className="text-success mb-3">
                                    { faker.internet.url() }
                                </div>
                            </div>
                            <div className="ml-auto text-right">
                                <Button color="link" className="pr-0">
                                    <i className="fa fa-heart-o"></i>
                                </Button>
                                <Button color="link" className="pr-0">
                                    <i className="fa fa-bars"></i>
                                </Button>
                            </div>
                        </div>
                        <dl className="row mb-0">
                            <dt className="col-lg-3 text-nowrap">Rating: </dt>
                            <dd className="col-lg-9">
                                { randomArray(stars) }
                            </dd>
                            <dt className="col-lg-3 text-nowrap">Category: </dt>
                            <dd className="col-lg-9">
                                <Badge color="secondary" pill className="mr-1">
                                    { faker.internet.domainName() }
                                </Badge>
                                <Badge color="secondary" pill className="mr-1">
                                    { faker.internet.domainName() }
                                </Badge>
                                <Badge color="secondary" pill className="mr-1">
                                    { faker.internet.domainName() }
                                </Badge>
                            </dd>
                            <dt className="col-lg-3 text-nowrap">Author: </dt>
                            <dd className="col-lg-9">
                                <Media>
                                    <Media left className="align-self-center mr-3">
                                        <Avatar.Image
                                            size="sm"
                                            src={ randomAvatar() }
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
                                        <div className="mt-0">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </div>
                                    </Media>
                                </Media>
                            </dd>
                            <dt className="col-lg-3 text-nowrap">Description: </dt>
                            <dd className="col-lg-9">
                                <p className="mb-0">
                                    { faker.lorem.sentence() }
                                </p>
                            </dd>
                        </dl>
                    </div>     
                </CardBody>
            </Card>
        </CardGroup>
    </React.Fragment>
)

export { VideosResultsCard };
