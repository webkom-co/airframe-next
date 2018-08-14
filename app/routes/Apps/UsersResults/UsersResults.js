import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../../components';

import { SearchResultsLeftNav } from "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../components/SearchResults/SearchResultsHeader";
import { UsersResultsCard } from "../../components/SearchResults/UsersResultsCard";

const UsersResults = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <CardColumns>
                        <UsersResultsCard />
                    </CardColumns>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default UsersResults;