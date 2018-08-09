import React from 'react';

import { 
    InputGroup,
    InputGroupAddon,
    Button,
    Input
} from './../../../components';

const ChatCardFooter = () => (
    <React.Fragment>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button color="secondary" outline>
                    <i className="fa fa fa-paperclip"></i>
                </Button>
            </InputGroupAddon>
            <Input placeholder="Your message..." />
            <InputGroupAddon addonType="append">
                <Button color="primary">
                    <i className="fa fa fa-send"></i>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </React.Fragment>
)

export { ChatCardFooter };
