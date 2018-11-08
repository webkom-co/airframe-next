import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../../features/HeaderMain";
import { FilesList } from '../../../features/Files/FilesList';
import { FilesLeftNav } from "../../../features/Files/FilesLeftNav";
import { ProjectsSmHeader } from "../../../features/Projects/ProjectsSmHeader";

const Files = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Files"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <FilesLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader
                        subTitle="Files List" 
                        linkList="/apps/files/list"
                        linkGrid="/apps/files/grid"
                    />
                    
                    <FilesList />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Files;
