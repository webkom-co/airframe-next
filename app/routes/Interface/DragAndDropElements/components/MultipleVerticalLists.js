import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';
import uid from 'uuid/v4';
import faker from 'faker';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../../components';
import { randomAvatar, randomArray } from './../../../../utilities';

const generateItem = () => ({
    id: uid(),
    type: 'single',
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobType(),
    avatarUrl: randomAvatar(),
    status: randomArray(['success', 'warning', 'danger'])
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const VerticalList = (props) => {
    return (
        <Card className="h-100">
            <CardHeader>
                <CardTitle className="h6 mb-0">
                    <i className="fa fa-ellipsis-v mr-3 text-muted" />
                    { props.title }
                </CardTitle>
            </CardHeader>

            <Droppable droppableId={ props.listId }>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className="list-group list-group-flush flex-grow-1"
                    >                    
                        {props.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="list-group-item"
                                    >
                                        <Media>
                                            <Media left className="align-self-center pr-3">
                                                <i className="fa fa-ellipsis-v text-muted" />
                                            </Media>
                                            <Media left middle className="mr-4 align-self-center">
                                                <Avatar.Image
                                                    size="md"
                                                    className="d-block"
                                                    src={ item.avatarUrl }
                                                    addOns={[
                                                        <AvatarAddOn.Icon 
                                                            className="fa fa-circle"
                                                            color="white"
                                                            key="avatar-icon-bg"
                                                        />,
                                                        <AvatarAddOn.Icon 
                                                            className="fa fa-circle"
                                                            color={ item.status }
                                                            key="avatar-icon-fg"
                                                        />
                                                    ]}
                                                /> 
                                            </Media>
                                            <Media body>
                                                <span className="mt-0 h6 mb-1">
                                                    { item.name }
                                                </span>
                                                <p className="mb-0 text-muted text-truncate">
                                                    { item.title }
                                                </p>
                                            </Media>
                                        </Media>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </Card>
    );
}
VerticalList.propTypes = {
    items: PropTypes.array,
    listId: PropTypes.string,
    title: PropTypes.string
}

export class MultipleVerticalLists extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    state = {
        listAItems: _.times(_.random(2, 4), generateItem),
        listBItems: _.times(_.random(3, 8), generateItem),
        listCItems: _.times(_.random(3, 8), generateItem)
    }

    constructor (props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.state[`${source.droppableId}Items`],
                source.index,
                destination.index
            );

            this.setState({
                [`${source.droppableId}Items`]: items
            });
        } else {
            const result = move(
                this.state[`${source.droppableId}Items`],
                this.state[`${destination.droppableId}Items`],
                source,
                destination
            );

            this.setState(_.mapKeys(result, (val, key) => `${key}Items`));
        }
    }

    render() {
        const { className } = this.props;
        const {
            listAItems,
            listBItems,
            listCItems
        } = this.state;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className={ className }>
                    <Row>
                        <Col md={ 4 }>
                            <VerticalList
                                listId="listA"
                                items={ listAItems }
                                title="All Candidates"
                            />
                        </Col>
                        <Col md={ 4 }>
                            <VerticalList
                                listId="listB"
                                items={ listBItems }
                                title="Candidates waiting for an interview"
                            />
                        </Col>
                        <Col md={ 4 }>
                            <VerticalList
                                listId="listC"
                                items={ listCItems }
                                title="Candidates who are ready for Testing"
                            />
                        </Col>
                    </Row>
                </div>
            </DragDropContext>
        )
    }
}