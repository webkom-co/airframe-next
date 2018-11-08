import React from 'react';
import _ from 'lodash';

import { 
    Container,
    Row,
    Col
} from './../../components';
import { HeaderMain } from "../../features/HeaderMain";
import { Paginations } from "../../features/Paginations";
import { SearchResultsLeftNav } from
    "../../features/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from
    "../../features/SearchResults/SearchResultsHeader";
import { SearchResultsCard } from
    "../../features/SearchResults/SearchResultsCard";

const SearchResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Search Results"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    {
                        _.times(7, (index) =>
                            <SearchResultsCard key={ index }/>
                        )
                    }
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default SearchResults;
