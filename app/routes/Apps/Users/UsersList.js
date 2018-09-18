import React from 'react';

import {
    Card,
    CardFooter,
    Table,
} from './../../../components';

import {
    TrTableUsersList
} from "./components/TrTableUsersList";

import {
    Paginations
} from "../../components/Paginations";

const UsersList = () => (
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
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                        <TrTableUsersList />
                    </tbody>
                </Table>
            </div>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations />
            </CardFooter>
        </Card>

);

export default UsersList;