import React from 'react';
import Select from 'react-select';
import { Badge } from './../../components';
import { colourOptions, groupedOptions } from './data';

const formatGroupLabel = data => (
    <div className="d-flex justify-content-between align-items-center">
        <span>{data.label}</span>
        <Badge color="secondary">{data.options.length}</Badge>
    </div>
);

export const Grouped = () => (
    <Select
        defaultValue={colourOptions[1]}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
    />
);
