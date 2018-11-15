import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import numeral from 'numeral';
import moment from 'moment';

import {
    Table,
    Button,
    UncontrolledTooltip
} from './../../components';
import {
    getFileIcon
} from './utilities';

export const FilesList = ({ files, onFileRemove }) => (
    <Table responsive hover className="mt-2">
        <thead>
            <tr>
                <th></th>
                <th>File Name</th>
                <th>Size</th>
                <th>Owner</th>
                <th>Modified Date</th>
                <th className="text-right">Actions</th>
            </tr>
        </thead>
        <tbody>
        {
            _.map(files, (file, index) => (
                <tr key={ index }>
                    <td>
                        <div className='ph--small'>
                            <i className={`fa fa-fw fa-2x ${getFileIcon(file)}`} />
                        </div>
                    </td>
                    <td>
                        { file.name }
                    </td>
                    <td className="text-uppercase">
                        { numeral(file.size).format('0.00a') }B
                    </td>
                    <td>
                        You
                    </td>
                    <td>
                        { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }
                    </td>
                    <td className="text-right">
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
                    </td>
                </tr>
            ))
        }
        </tbody>
    </Table>
);

FilesList.propTypes = {
    files: PropTypes.array,
    onFileRemove: PropTypes.func
}