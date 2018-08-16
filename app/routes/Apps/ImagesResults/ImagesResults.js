import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../../components';

import { SearchResultsLeftNav } from "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../components/SearchResults/SearchResultsHeader";
import { ImagesResultsCard } from "../../components/SearchResults/ImagesResultsCard";
import { Paginations } from "../../components/Paginations";

const ImagesResults = () => (
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
                        <ImagesResultsCard />
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

export default ImagesResults;