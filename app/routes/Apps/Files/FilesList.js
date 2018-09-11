import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    Media,
    Card,
    CardFooter,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../../components';

import { Paginations } from "../../components/Paginations";
import { TrTableFilesList } from "./components/TrTableFilesList";

const FilesList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">Directory</th>
                        <th className="align-middle bt-0">Last Change</th>
                        <th className="align-middle bt-0">Share</th>
                        <th className="align-middle bt-0">Tags</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                    <TrTableFilesList />
                </tbody>
            </Table>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations />
            </CardFooter>
        </Card>

);

export default FilesList;