import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardBody
} from './../../../components';

const SearchResultsCard = () => (
    <React.Fragment>
        <Card className="mb-3">
            <CardBody>
                <a className="h6">
                    { faker.lorem.sentence() }
                </a>
                <br />
                <div className="mb-2">
                    <span className="text-success">
                        { faker.internet.url() }
                    </span>
                    <span className="mx-1">·</span>
                    <i className="fa fa-fw fa-star text-warning"></i><i className="fa fa-fw fa-star text-warning"></i><i className="fa fa-fw fa-star text-warning"></i><i className="fa fa-fw fa-star text-warning"></i><i className="fa fa-fw fa-star-o"></i>
                    <span className="mx-1">·</span>
                    <span>
                        Votes
                    </span>
                </div>
                <p className="mb-0">
                    { faker.lorem.paragraph() }
                </p>
            </CardBody>
        </Card>
    </React.Fragment>
)

export { SearchResultsCard };
