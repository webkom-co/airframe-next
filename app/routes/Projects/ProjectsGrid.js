import React from 'react';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar,
    Progress,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
    Pagination,
    PaginationItem,
    PaginationLink,
    AvatarAddOn,
    Card,
    CardColumns,
    CardTitle,
    CardBody,
    CardText,
    CardFooter,
    Table,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const ProjectsGrid = () => (
        
        <CardColumns>
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
        </CardColumns>

);

export default ProjectsGrid;