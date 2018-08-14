import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import { 
    Button,
    Breadcrumb,
    UncontrolledTooltip,
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
                <Button tag={ NavLink } to={ `${ props.linkList }` } color="secondary" outline className="align-self-center" id="tooltipShowList">
                    <i className="fa-fw fa fa-bars"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="tooltipShowList">
                    Show List
                </UncontrolledTooltip>
                <Button tag={ NavLink } to={ `${ props.linkGrid }` } color="secondary" outline className="align-self-center" id="tooltipShowGrid">
                    <i className="fa-fw fa fa-th-large"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="tooltipShowGrid">
                    Show Grid
                </UncontrolledTooltip>
            </ButtonGroup>
            <Button color="secondary" className="align-self-center" id="tooltipAddNew">
                <i className="fa-fw fa fa-plus"></i>
            </Button>
            <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                Add New
            </UncontrolledTooltip>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node,
    linkList: PropTypes.node,
    linkGrid: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    title: "App",
    linkList: "#",
    linkGrid: "#"
};

export { ProjectsSmHeader };
