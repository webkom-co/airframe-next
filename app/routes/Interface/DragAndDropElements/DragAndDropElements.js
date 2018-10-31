import React from 'react';

import {
    Container
} from './../../../components';
import {
    HeaderMain
} from './../../components/HeaderMain';
import {
    HeaderDemo
} from './../../components/HeaderDemo';

import {
    MultipleVerticalLists,
    DraggableTable
} from './components';

export class DragAndDropElements extends React.Component {
    render() {
        return (
            <Container>
                <HeaderMain title="Drag &amp; Drop Elements" />
                <p>
                    Beautiful, accessible drag and drop for React lists.
                </p>

                <div className="pt-4">
                    <HeaderDemo
                        no="#1.01"
                        title="Mutliple Verical Lists"
                        subTitle="Both list are draggable horizontally and inner list elements can be swapped or reorderd"
                    />
                    <MultipleVerticalLists />
                </div>

                <div className="pt-4">
                    <HeaderDemo
                        no="#1.02"
                        title="Table"
                        subTitle="Allows reordering of the table rows"
                    />
                    <DraggableTable />
                </div>
            </Container>
        );
    }
}
