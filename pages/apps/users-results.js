import React from 'react';
import _ from 'lodash';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";
import { Paginations } from "../../features/Paginations";
import { SearchResultsLeftNav } from "../../features/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../features/SearchResults/SearchResultsHeader";
import { UsersResultsCard } from "../../features/SearchResults/UsersResultsCard";

const UsersResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Users Results"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <CardColumns>
                        {
                            _.times(9, (index) =>
                                <UsersResultsCard key={index} />
                            )
                        }
                    </CardColumns>
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default UsersResults;
