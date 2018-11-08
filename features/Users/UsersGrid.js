import React from 'react';
import _ from 'lodash';

import { CardColumns } from './../../components';

import { Paginations } from "../Paginations";
import { UsersCardGrid } from "../Users/UsersCardGrid";

export const UsersGrid = () => (
	<React.Fragment>
		<CardColumns>
			{
				_.times(12, (index) => (
					<UsersCardGrid
						key={ index }
						id={`${index + 1}`}
					/>
				))
			}
		</CardColumns>
		<div className="d-flex justify-content-center">
			<Paginations />
		</div>
    </React.Fragment>
);
