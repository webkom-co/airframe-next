import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../../features/HeaderMain";
import { UsersGrid } from '../../../features/Users/UsersGrid';
import { UsersLeftNav } from "../../../features/Users/UsersLeftNav";
import { ProjectsSmHeader } from "../../../features/Projects/ProjectsSmHeader";

const Users = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Users"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <UsersLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        subTitle="Users Grid"
                        linkList="/apps/users/list"
                        linkGrid="/apps/users/grid"
                    />

                    <UsersGrid />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Users;