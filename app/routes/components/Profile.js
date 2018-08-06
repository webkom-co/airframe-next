import React from 'react';
import faker from 'faker';

import { 
    Avatar,
    AvatarAddOn
} from './../../components';

const Profile = () => (
    <React.Fragment>
        <div className="d-flex justify-content-center my-3">
            <Avatar.Image
                size="lg"
                src="http://bs4.webkom.co/img/avatars/2.jpg"
                addOns={[
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="white"
                        key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon 
                        className="fa fa-circle"
                        color="primary"
                        key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon 
                        className="fa fa-facebook"
                        color="white"
                        key="avatar-icon-fg"
                        small
                    />
                ]}
            /> 
        </div>
        <div className="mb-4 text-center">
            <h6>
                { faker.name.firstName() } { faker.name.lastName() }
            </h6>
            <div className="text-center mt-2">
                { faker.name.jobTitle() }
            </div>
            <div className="text-center">
                <i className="fa fa-map-marker mr-1"></i>
                { faker.address.city() }
            </div>
        </div>
    </React.Fragment>
)

export { Profile };
