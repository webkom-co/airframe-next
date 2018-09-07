import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { 
    Card, 
    CardBody, 
    CardFooter,
    Button,
    CardHeader
} from './../../../components';

import { InfoPopover } from './InfoPopover';

const CardRgbaColor = (props) => (
    <Card className="mb-3">
    {
        _.times(9, (index) => {
            let Tag = CardFooter;
            Tag = index === 0 ? CardHeader : CardBody;
            Tag = index === 8 ? CardFooter : CardBody;
            const colorId = `${ props.color }-0${ index + 1 }`
            return (
                <Tag className={ `d-flex justify-content-center b-0 bg-${ colorId }` } key={ index }>
                    <InfoPopover className="h6 text-inverse p-1 mb-0" colorId={ colorId } tag={ Button } color="link">
                        { colorId } 
                        <i className="fa fa-angle-up ml-1"></i>
                    </InfoPopover>
                </Tag>
            );
        })
    }
    </Card>
);
CardRgbaColor.propTypes = {
    color: PropTypes.node
};
CardRgbaColor.defaultProps = {
    color: "Waiting for Data..."
};

export { CardRgbaColor };
