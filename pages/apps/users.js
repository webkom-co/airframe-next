import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";
import { UsersList } from '../../features/Users/UsersList';
import { UsersGrid } from '../../features/Users/UsersGrid';
import { UsersLeftNav } from "../../features/Users/UsersLeftNav";
import { ProjectsSmHeader } from "../../features/Projects/ProjectsSmHeader";

const Users = (props) => (
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
                        subTitle={props.match.params.type === "list"?"Users List":"Users Grid"}
                        linkList="/apps/users/list"
                        linkGrid="/apps/users/grid"
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