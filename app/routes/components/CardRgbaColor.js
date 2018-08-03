import React from 'react';
import PropTypes from 'prop-types';
import { 
    Card, 
    CardBody, 
    CardFooter,
    Button,
    CardHeader } from 'reactstrap';

const CardRgbaColor = (props) => (

    <Card className="mb-3">
        <CardHeader className={ `d-flex justify-content-center bg-${ props.color }-01` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-01 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardHeader>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-02` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-02 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-03` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-03 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-04` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-04 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-05` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-05 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-06` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-06 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-07` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-07 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardBody className={ `d-flex justify-content-center bg-${ props.color }-08` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-08 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardBody>
        <CardFooter className={ `d-flex justify-content-center bg-${ props.color }-09` }>
            <Button color="link" className="h6 text-dark p-1 mb-0">
                { props.color }-09 
                <i className="fa fa-angle-up ml-1"></i>
            </Button>
        </CardFooter>
    </Card>

)
CardRgbaColor.propTypes = {
    color: PropTypes.node
};
CardRgbaColor.defaultProps = {
    color: "Waiting for Data..."
};

export { CardRgbaColor };
