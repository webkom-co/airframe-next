import React from 'react';

import { 
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardFooter,
    Table
} from './../../../components';

import { TrTableTasksList } from "./components/TrTableTasksList";

const TasksList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">#</th>
                        <th className="align-middle bt-0">Priority</th>
                        <th className="align-middle bt-0">Title & Description</th>
                        <th className="align-middle bt-0">People</th>
                        <th className="align-middle bt-0">Update</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                    <TrTableTasksList />
                </tbody>
            </Table>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous href="#">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#">
                            <i className="fa fa-fw fa-angle-right"></i>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </CardFooter>
        </Card>

);

export default TasksList;
