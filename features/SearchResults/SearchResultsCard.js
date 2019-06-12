import React from 'react';
import faker from 'faker';

import { 
    Card,
    CardBody
} from './../../components';

import { randomArray } from './../../core/utilities';

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
                    { randomArray(stars) }
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