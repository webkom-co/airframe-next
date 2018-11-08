import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";
import { SearchResultsLeftNav } from "../../features/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../features/SearchResults/SearchResultsHeader";
import { ImagesResultsCard } from "../../features/SearchResults/ImagesResultsCard";
import { Paginations } from "../../features/Paginations";

const ImagesResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Images Results"
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
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
                        <ImagesResultsCard />
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
