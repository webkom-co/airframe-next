import React from 'react';

import {
    Container,
    Button
} from './../../components';
import {
    HeaderMain
} from './../../features/HeaderMain';
import {
    HeaderDemo
} from './../../features/HeaderDemo';

import {
    MultipleVerticalLists,
    DraggableTable,
    HorizontalLists
} from './../../features/DragAndDropElements';
import './../../styles/pages/interface/drag-and-drop-elements.scss';

export default class DragAndDropElements extends React.Component {
    multipleVerticalListsRef = React.createRef();
    draggableTableRef = React.createRef();
    horizontalLists = React.createRef();

    onResetState = () => {
        this.multipleVerticalListsRef.current.recoverInitialState();
        this.draggableTableRef.current.recoverInitialState();
        this.horizontalLists.current.recoverInitialState();
    }

    render() {
        return (
            <Container>
                <div className="d-flex">
                    <div>
                        <HeaderMain title="Drag &amp; Drop Elements" />
                        <p>
                            Beautiful, accessible drag and drop for React lists.
                        </p>
                    </div>
                    <Button onClick={ this.onResetState } className="ml-auto align-self-center">
                        Reset Layout
                    </Button>
                </div>

                <div className="pt-4">
                    <HeaderDemo
                        no="#1.01"
                        title="Mutliple Verical Lists"
                        subTitle="Both list are draggable horizontally and inner list elements can be swapped or reorderd"
                    />
                    <MultipleVerticalLists ref={ this.multipleVerticalListsRef }/>
                </div>

                <div className="pt-4">
                    <HeaderDemo
                        no="#1.02"
                        title="Table"
                        subTitle="Allows reordering of the table rows"
                    />
                    <DraggableTable ref={ this.draggableTableRef }/>
                </div>
                <div className="pt-4">
                    <HeaderDemo
                        no="#1.03"
                        title="Horizontal Lists"
                        subTitle="Items can be reaordered and moved between lists"
                    />
                    <HorizontalLists ref={ this.horizontalLists }/>
                </div>
            </Container>
        );
    }
}
