import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../components';

import {
    SearchResultsLeftNav
} from "../components/SearchResults/SearchResultsLeftNav";

import {
    SearchResultsHeader
} from "../components/SearchResults/SearchResultsHeader";

import {
    SearchResultsCard
} from "../components/SearchResults/SearchResultsCard";

const SearchResults = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <SearchResultsCard />
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default SearchResults;