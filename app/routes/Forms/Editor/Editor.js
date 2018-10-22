import React from 'react';
import ReactQuill from 'react-quill';
import faker from 'faker';

import {
    Container,
    Card
} from './../../../components';

export class Editor extends React.Component {
    state = {
        text: `
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
        `
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent'
    ]

    render() {
        return (
            <Container>
                <Card>
                    <ReactQuill
                        value={ this.state.text }
                        onChange={ this._handleChange }
                        modules={ this.modules }
                        formats={ this.formats }
                        style={{
                            minHeight: '480px'
                        }}
                    />
                </Card>
            </Container>
        );
    }

    _handleChange = (text) => {
        this.setState({ text })
    }
}
