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
    MultipleVerticalLists
} from './components';

export class DragAndDropElements extends React.Component {
    render() {
        return (
            <Container>
                <HeaderMain title="Drag &amp; Drop Elements" />
                <p>
                    Beautiful, accessible drag and drop for React lists.
                </p>

                <HeaderDemo
                    no="#1.01"
                    title="Mutliple Verical Lists"
                    subtitle="Stress test??"
                />
                <MultipleVerticalLists />
            </Container>
        );
    }
}
