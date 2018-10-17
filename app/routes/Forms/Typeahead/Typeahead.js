import React from 'react';

import {
    Container,
    Row,
    Col
} from './../../../components';
import {
    BasicExample,
    BasicBehaviors,
    ControllingSelections,
    InputSize,
    MenuAlignment,
    FormExample,
    PaginationExample,
    BodyContainer,
    RenderingExample,
    LabelKey,
    FilteringExample,
    CustomFilteringExample,
    CustomSelections,
    AsyncSearch,
    AsyncPagination,
    PublicMethods
} from './components';

export const Typeahead = () => (
    <Container>
        <Row>
            <Col>
                <h5>Basic Example</h5>
                <p>
                    The typeahead allows single-selection by default. Setting the <code>multiple</code> prop turns the component into a tokenizer, allowing multiple selections.
                </p>
                <BasicExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Behaviors</h5>
                <p>
                    The typeahead has several basic configurable behaviors. You can <code>disable</code> it as you would any input. You can position the menu above the input with <code>dropup</code> or aoutomatically re-position it when it hits the viewport bounds. Use <code>minLength</code> to require a minimum user input before displaying results, or hide the menu when there are no results by passing an empty string to <code>emptyLabel</code>.
                </p>
                <BasicBehaviors />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Controlling Selections</h5>
                <p>
                    You can pre-populate the the typeahead by passing in an array of selections. Setting the <code>clearButton</code> prop displays a button allowing users to clear the input.
                </p>
                <ControllingSelections />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Input Size</h5>
                <p>
                    Besides the default input size, you can specify either a <code>small</code> or <code>large</code> size using the <code>bsSize</code> prop.
                </p>
                <InputSize />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Menu Alignment</h5>
                <p>
                    Specify alignment of the menu via the <code>align</code> prop. Valid values are <code>justify</code>, <code>left</code>, or <code>right</code>.
                </p>
                <MenuAlignment />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Input Groups and Validation States</h5>
                <p>
                    The typeahead works with Bootstrap input groups and add-ons; it also handles validation states.
                </p>
                <FormExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Pagination</h5>
                <p>
                    To improve browser performance, the typeahead paginates large data sets by default. You can set the number of results to be displayed using <code>maxResults</code>, or override pagination completely using <code>paginate</code>. The <code>onPaginate</code> hook allows you to respond to the pagination event.
                </p>
                <PaginationExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Body Container</h5>
                <p>
                    You can customize how the typeahead looks and behaves by using the provided rendering hooks.
                </p>
                <BodyContainer />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Rendering</h5>
                <p>
                    Setting the <code>bodyContainer</code> prop will attach the menu to <code>document.body</code> instead of the typeahead. Compare the behaviors in the srolling container below.
                </p>
                <RenderingExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>LabelKey</h5>
                <p>
                    The <code>labelKey</code> prop accepts a callback allowing you to transform your data and return a compound string rather than just a single data field.
                </p>
                <LabelKey />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Filtering</h5>
                <p>
                    By default, the typeahead is not case-sensitive and ignores diacritical marks when filtering. You can change these behaviors using the <code>caseSensitive</code> and <code>ignoreDiacritics</code> props.
                </p>
                <FilteringExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Custom Filtering</h5>
                <p>
                    Using the <code>filterBy</code> prop, you can either specify your own callback or an array of fields on your data object by which to filter.
                </p>
                <CustomFilteringExample />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Custom Selections</h5>
                <p>
                    Setting the <code>allowNew</code> prop provides the ability to create new options for the data set. You can change the label displayed before the custom option in the menu by using the <code>newSelectionPrefix</code> prop.
                </p>
                <CustomSelections />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Asynchronous Searching</h5>
                <p>
                    You can use the <code>AsyncTypeahead</code> component for asynchronous searches. It debounces user input and includes an optional query cache to avoid making the same request more than once in basic cases.
                </p>
                <AsyncSearch />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Pagination</h5>
                <p>
                    A more advanced case involves paginating async results. Additional results are fetched using <code>onPaginate</code> while a custom query cache tracks the incremental results and page number for each query.
                </p>
                <AsyncPagination />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <h5>Public Methods</h5>
                <p>
                    The <code>clear</code>, <code>focus</code>, and <code>blur</code> methods are exposed for programmatic control of the typeahead.
                </p>
                <PublicMethods />
            </Col>
        </Row>
    </Container>
);