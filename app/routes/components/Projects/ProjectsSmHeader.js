import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import { 
    Button,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
} from './../../../components';

const ProjectsSmHeader = (props ) => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex justify-content-end">
            <Breadcrumb className="mr-auto d-flex align-items-center">
                <BreadcrumbItem active>
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    {props.subTitle}
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {props.title}
                </BreadcrumbItem>
            </Breadcrumb>
            <ButtonGroup className="p-2">
                <Button tag={ NavLink } to="/projects/list" color="secondary" outline className="align-self-center">
                    <i className="fa-fw fa fa-bars"></i>
                </Button>
                <Button tag={ NavLink } to="/projects/grid" color="secondary" outline className="align-self-center">
                    <i className="fa-fw fa fa-th-large"></i>
                </Button>
            </ButtonGroup>
            <Button color="secondary" className="align-self-center">
                <i className="fa-fw fa fa-plus"></i>
            </Button>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    title: "App"
};

export { ProjectsSmHeader };
