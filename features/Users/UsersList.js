import React from 'react';
import _ from 'lodash';

import {
    Card,
    CardFooter,
    Table,
} from './../../components';

import { Paginations } from "../Paginations";
import { TrTableUsersList } from "./TrTableUsersList";

export const UsersList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0"></th>
                            <th className="align-middle bt-0"></th>
                            <th className="align-middle bt-0">Name</th>
                            <th className="align-middle bt-0">Email</th>
                            <th className="align-middle bt-0">Phone</th>
                            <th className="align-middle bt-0 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.times(12, (index) => (
                                <TrTableUsersList
                                    key={ index }
                                    id={`${index + 1}`}
                                />
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations />
            </CardFooter>
        </Card>

);
