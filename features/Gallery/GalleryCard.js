import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

import { 
    Card,
    CardImg,
    HolderProvider,
    Media,
    Avatar,
    CustomInput,
    UncontrolledTooltip,
    AvatarAddOn,
    Badge,
    CardFooter,
    CardBody
} from './../../components';

import { randomArray, randomAvatar } from './../../core/utilities';

const status = [
    "success",
    "danger",
    "warning",
    "secondary"
];
const badges = [
    "info",
    "primary",
    "secondary"
];

const GalleryCard = (props) => (
    <React.Fragment>
        { /* START Card */}
        <Card className="mb-3">
            <HolderProvider.Icon
                iconChar=""
                size={ 32 }
            >
            <CardImg top />
            </HolderProvider.Icon>
            <CardBody>
                <Media className="mb-3">
                    <Media left>
                        <CustomInput type="checkbox" id={`galleryCard-${ props.id }` } label="" className="pr-2" />
                    </Media>
                    <Media body>
                        <span>
                            <span className="h6">
                                { faker.commerce.productName() }
                            </span>
                            <br />
                            <span>
                                { faker.system.fileName() }
                            </span>
                        </span>
                    </Media>
                    <Media right>
                        <a href="#" className="ml-auto" id={`galleryCardTooltip-${ props.id }` }>
                            <i className="fa fa-download"></i>
                        </a>
                        <UncontrolledTooltip placement="top" target={`galleryCardTooltip-${ props.id }` }>
                            Download
                        </UncontrolledTooltip>
                    </Media>
                </Media>
                <Media>
                    <Media left className="align-self-center mr-3">
                        <Avatar.Image
                            size="md"
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
                <Badge pill color={ randomArray(badges) } className="mr-1">
                    { faker.commerce.department() }
                </Badge>
                <Badge pill color={ randomArray(badges) } className="mr-1">
                    { faker.commerce.department() }
                </Badge>
                <Badge pill color={ randomArray(badges) } className="mr-1">
                    { faker.commerce.department() }
                </Badge>
            </CardFooter>
        </Card>
        { /* END Card */}
    </React.Fragment>
)
GalleryCard.propTypes = {
    id: PropTypes.node
};
GalleryCard.defaultProps = {
    id: "1"
};

export { GalleryCard };
