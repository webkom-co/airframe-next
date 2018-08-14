import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import UsersList from './UsersList';
import UsersGrid from './UsersGrid';
import {
    UsersLeftNav
} from "../components/Users/UsersLeftNav";
import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";


const Users = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <UsersLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        linkList="/users/list"
                        linkGrid="/users/grid"
                    />

                    { 
                        props.match.params.type === "list" ?
                            <UsersList /> :
                            <UsersGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Users.propTypes = {
    match: PropTypes.object.isRequired
};


export default Users;