import React from 'react';
import v4 from 'uuid/v4';
import _ from 'lodash';
import faker from 'faker';

import {
    Container,
    Grid,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from './../../../components';
import { applyColumn } from './../../../components/FloatGrid';
import {
    HeaderMain
} from './../../components/HeaderMain';

export class DragAndDropLayout extends React.Component {
    constructor(props) {
        super(props);

        this._lastLayout = this._generateLayout();

        this.state = {
            layouts: this._lastLayout,
            compactType: null,
            fluid: false,
            texts: this._generateTexts(this._lastLayout)
        }

        this.generateLayoutHandler = this.generateLayoutHandler.bind(this);
        this.resetLayoutHandler = this.resetLayoutHandler.bind(this);
    }

    generateLayoutHandler() {
        this._lastLayout = this._generateLayout();

        this.setState({
            layouts: this._lastLayout,
            texts: this._generateTexts(this._lastLayout)
        });
    }

    resetLayoutHandler() {
        this.setState({
            layouts: this._lastLayout
        });
    }

    selectCompactType(compactType) {
        this.setState({ compactType });
    }

    selectFluid(fluid) {
        this.setState({ fluid });
    }

    render() {
        const { compactType, fluid, texts } = this.state;

        return (
            <React.Fragment>
                <Container>
                    <HeaderMain title="Drag &amp; Drop Layout" />
                    <p>
                        React-Grid_layout is a grid layout system much like Packery or Gridster for React. Unlike those systems, it is responsive and supports breakpoints. These breakpoints can be provided in the same way as in Reactstrap&apos;s Grid system.
                    </p>
                    <div className="d-flex align-items-center">
                        <Button outline onClick={ this.generateLayoutHandler }>
                            Generate New Layout
                        </Button>

                        <UncontrolledDropdown className="ml-2">
                            <DropdownToggle outline>
                                Change Compaction Type:&nbsp;
                                <strong>
                                    { !compactType && "No Compactions" }
                                    { compactType === "vertical" && "Vertical" }
                                    { compactType === "horizontal" && "Horizontal" }
                                </strong>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem
                                    active={!compactType}
                                    onClick={() => this.selectCompactType(null)}
                                >
                                    No Compactions
                                </DropdownItem>
                                <DropdownItem
                                    active={compactType === "vertical"}
                                    onClick={() => this.selectCompactType("vertical")}
                                >
                                    Vertical
                                </DropdownItem>
                                <DropdownItem
                                    active={compactType === "horizontal"}
                                    onClick={() => this.selectCompactType("horizontal")}
                                >
                                    Horizontal
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown className="ml-2">
                            <DropdownToggle outline>
                                Layout:&nbsp;
                                <strong>
                                    { !fluid && "Container" }
                                    { fluid && "Fluid" }
                                </strong>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem
                                    active={!fluid} 
                                    onClick={() => this.selectFluid(false)}
                                >
                                    Container
                                </DropdownItem>
                                <DropdownItem
                                    active={fluid}
                                    onClick={() => this.selectFluid(true)}
                                >
                                    Fluid
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <Button outline className="ml-2" onClick={ this.resetLayoutHandler }>
                            <i className="fa fa-times-circle fa-fw mr-2" />Reset
                        </Button>
                    </div>
                </Container>
                <Grid
                    className="mt-4"
                    fluid={ this.state.fluid }
                    compactType={ compactType }
                >
                    <Grid.Row
                        onLayoutChange={ layouts => this.setState({ layouts }) }
                        columnSizes={ this.state.layouts }
                        rowHeight={ 55 }
                    >
                        {
                            _.chain(this.state.layouts)
                                .keys()
                                .map((layoutKey) => (
                                    <Grid.Col {...applyColumn(layoutKey, this.state.layouts)} key={ layoutKey }>
                                        <Card>
                                            <CardHeader>
                                                { texts[layoutKey].title }
                                            </CardHeader>
                                            <CardBody style={{ overflow: "hidden" }}>
                                                { texts[layoutKey].desc }
                                            </CardBody>
                                            <CardFooter>
                                            </CardFooter>
                                        </Card>
                                    </Grid.Col>
                                ))
                                .value()
                        }
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }

    _generateLayout = (rowsCount = 3) => {
        const TOTAL_ROWS = 12;
        const HEIGHT = 5;
        let output = {};

        for (let i = 0; i < rowsCount; i++) {
            let availableRow = TOTAL_ROWS;
            while (availableRow > 0) {
                const newCol = availableRow < TOTAL_ROWS ? availableRow : 
                    _.random(3, 9);

                availableRow -= newCol;
                output = {
                    ...output,
                    [v4()]: { md: newCol, h: HEIGHT }
                }
            }
        }

        return output;
    }

    _generateTexts = (layouts) =>
        _.mapValues(layouts, () => ({
            title: faker.commerce.productName(),
            desc: faker.lorem.paragraph()
        }))
}