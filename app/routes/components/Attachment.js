import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { 
    Media, 
    Button 
} from 'reactstrap';

const Attachment = (props) => (

    <Media className="mb-2">
        <Media left className="mr-2">
            <span className="fa-stack fa-lg">
                <i className={ `fa fa-square fa-stack-2x fa-${ props.BgIcon } fa-stack-1x ${ props.BgIconClassName }` }></i>
                <i className={ `fa fa-${ props.icon } fa-stack-1x ${ props.iconClassName }` }></i>
            </span>
        </Media>
        <Media body>
            <div className="text-inverse">
                { faker.system.fileName() }
            </div>
            <span>
                by <span>
                    { faker.name.firstName() } { faker.name.firstName() }
                </span> 
                <span className="text-muted"> · </span> 
                <span>
                    { faker.finance.amount() } Kb
                </span>
            </span>
        </Media>
        <Media right className="d-flex">
            <div className="text-right mr-3">
                04-Oct-2012<br />
                05:20 PM
            </div>
            <Button color="secondary" outline className="align-self-center">
                <i className="fa fa-fw fa-download"></i>
            </Button>
        </Media>
    </Media>

)
Attachment.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    BgIcon: PropTypes.node,
    BgIconClassName: PropTypes.node
};
Attachment.defaultProps = {
    icon: "question",
    iconClassName: "text-white",
    BgIcon: "square",
    BgIconClassName: "text-muted"
};

export { Attachment };
