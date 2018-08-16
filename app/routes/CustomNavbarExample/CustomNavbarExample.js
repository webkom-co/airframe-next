import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import { withPageConfig } from
    './../../components/Layout/withPageConfig';
import {
    Container,
    Row,
    Col
} from './../../components';

class CustomNavbarExample extends React.Component {
    static propTypes = {
        pageConfig: PropTypes.object
    };

    componentDidMount() {
        const { pageConfig } = this.props;
        
        pageConfig.setElementsVisibility({
            sidebarHidden: true
        });
    }

    componentWillUnmount() {
        const { pageConfig } = this.props;

        pageConfig.setElementsVisibility({
            sidebarHidden: false
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        { faker.lorem.paragraphs() }
                    </Col>
                </Row>
            </Container>
        );
    }
}

const ExtendedCustomNavbarExample = withPageConfig(CustomNavbarExample);

export {
    ExtendedCustomNavbarExample as CustomNavbarExample
};
