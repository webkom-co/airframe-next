import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';

import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    UncontrolledTooltip
} from './../../components';
import {
    getFileIcon
} from './utilities';

export const FilesGrid = ({ files, onFileRemove }) => (
    <Row className="mt-2">
    {
        _.map(files, (file, index) => (
            <Col lg={ 4 } md={ 6 } key={index}>
                <Card className="mb-3">
                    <div className="card-img-top ph--large">
                        <i className={`fa fa-fw fa-3x ${getFileIcon(file)}`} />
                    </div>
                    <CardBody>
                        <p className="d-flex align-items-center mb-0">
                            <strong className="text-truncate">
                                { file.name }
                            </strong>
                            <Button
                                color="link"
                                onClick={() => {onFileRemove(file)}}
                                size="sm"
                                id={`delete-file-${index}`}
                            >
                                <i className="fa fa-times fa-fw text-danger"></i>
                            </Button>
                            <UncontrolledTooltip placement="left" target={`delete-file-${index}`}>
                                Delete File
                            </UncontrolledTooltip>
                        </p>
                        <p className="mb-0">
                            by You &middot; <span className='text-uppercase'>{`${numeral(file.size).format('0.00a')}B`}</span>
                        </p>
                        <p className='mb-0'>
                            { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }
                        </p>
                    </CardBody>
                </Card>
            </Col>
        ))
    }
    </Row>
);

FilesGrid.propTypes = {
    files: PropTypes.array,
    onFileRemove: PropTypes.func
}