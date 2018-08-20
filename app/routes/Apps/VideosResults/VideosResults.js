import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { SearchResultsLeftNav } from "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../components/SearchResults/SearchResultsHeader";
import { VideosResultsCard } from "../../components/SearchResults/VideosResultsCard";
import { Paginations } from "../../components/Paginations";

const VideosResults = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <VideosResultsCard />
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default VideosResults;
