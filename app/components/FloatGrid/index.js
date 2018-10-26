import { Col } from './Col';
import { Row } from './Row';
import { Grid } from './Grid';

Grid.Col = Col;
Grid.Row = Row;

export const applyColumn = (columnId, layouts) => ({
    ...layouts[columnId],
    i: columnId,
    key: columnId
});

export default Grid;
