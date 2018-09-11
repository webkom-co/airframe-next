import React from 'react';

import { CardColumns } from './../../../components';
import { UsersCardGrid } from "../../components/Users/UsersCardGrid";
import { Paginations } from "../../components/Paginations";

const UsersGrid = () => (
	<React.Fragment>
		<CardColumns>
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
			<UsersCardGrid />
		</CardColumns>
		<div className="d-flex justify-content-center">
			<Paginations />
		</div>
    </React.Fragment>
);

export default UsersGrid;