import React from 'react';

import { 
    CardColumns
} from './../../components';

import {
    FilesCardGrid
} from "../components/Files/FilesCardGrid";

const FilesGrid = () => (

        <CardColumns>
            <FilesCardGrid />
        </CardColumns>
);
export default FilesGrid;