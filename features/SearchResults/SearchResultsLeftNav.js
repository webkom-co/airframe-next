import React from 'react';
import faker from 'faker';

import { 
    Nav, 
    NavLink,
    NavItem,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    CustomInput,
    Badge,
    ActiveLink
} from './../../components';

const SearchResultsLeftNav = () => (
    <React.Fragment>
        { /* START Navigation */}
        <Nav vertical pills className="mb-3">
            <NavItem>
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Navigation
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ ActiveLink } to="/apps/search-results" className="d-flex">
                    All Results
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        12
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ ActiveLink } to="/apps/images-results" className="d-flex">
                    Images
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        5
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ ActiveLink } to="/apps/videos-results" className="d-flex">
                    Videos
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        10
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ ActiveLink } to="/apps/users-results" className="d-flex">
                    Users
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        2
                    </Badge>
                </NavLink>
            </NavItem>
        </Nav>
        { /* END Navigation */}
        { /* START Category */}
        <Nav vertical className="mb-3">
            <NavItem>
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Category
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex pl-2 py-1 pr-2">
                    <span>
                        <i className="fa fa-angle-right mr-1"></i>  { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex pl-2 py-1 pr-2">
                    <span>
                        <i className="fa fa-angle-right mr-1"></i>  { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex pl-2 py-1 pr-2">
                    <span>
                        <i className="fa fa-angle-right mr-1"></i>  { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex py-1 pl-3 pr-2" active>
                    <span>
                        <i className="fa fa-check mr-1"></i>  { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
        </Nav>
        { /* END Category */}
        { /* START Rating */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Rating
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio1" name="rating" label="Clothing" inline defaultChecked />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio2" name="rating" label="Baby" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio3" name="rating" label="Jewelery" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio4" name="rating" label="Games" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
        </Nav>
        { /* END Rating */}
        { /* START Tags */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Tags
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox1" label="Garden" inline defaultChecked />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox2" label="Beauty" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox3" label="Clothing" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox4" label="Games" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
        </Nav>
        { /* END Tags */}
        { /* START Price */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Price
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        $
                    </InputGroupAddon>
                    <Input placeholder="Min: 5" />
                    <Input placeholder="Max: 87" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" outline>
                            <i className="fa fa-check"></i>
                        </Button>
                    </InputGroupAddon> 
                </InputGroup>
            </NavItem>
        </Nav>
        { /* END Price */}
        { /* START Shipping */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Shipping
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <CustomInput type="select" name="select" id="shipping">
                    <option>England</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other...</option>
                </CustomInput>
            </NavItem>
        </Nav>
        { /* END Shipping */}
        { /* START Sales */}
        <Nav vertical className="mb-4">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Sales
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <CustomInput type="select" name="select" id="sales">
                    <option>England</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other...</option>
                </CustomInput>
            </NavItem>
        </Nav>
        { /* END Sales */}
        <Button color="primary" block>
            Confirm Changes
        </Button>
        <Button color="link" block>
            Reset to Default
        </Button>
    </React.Fragment>
)

export { SearchResultsLeftNav };
