import React from 'react';

import {
    Container
} from './../../components';
import {
    ExampleProvider
} from './../../features/CropImage/ExampleProvider';

import { HeaderMain } from "../../features/HeaderMain";
import { HeaderDemo } from "../../features/HeaderDemo";

const CropImage = () => (
    <Container>
        <HeaderMain 
            title="Crop Images"
            className="mb-5 mt-4"
        />
        <div>
            <HeaderDemo 
                no={1} 
                title="Default" 
                subTitle="Default configuration of the crop component."
            />
            <ExampleProvider
                src="/static/images/crop-image/image-1.jpg"
            />
        </div>
        <div className="mt-4">
            <HeaderDemo 
                no={2} 
                className="mt-5" 
                title="Limit Crop Size"
                subTitle={(
                    <React.Fragment>
                        You can limit the crop size by providing crop 
                        percentage using <code>minWidth</code>, <code>maxWidth</code>, 
                        <code>minHeight</code> and <code>minHeight</code> props.
                    </React.Fragment>
                )}
            />
            <ExampleProvider
                src="/static/images/crop-image/image-2.jpg"
                cropProps={{
                    minWidth: 30,
                    maxWidth: 60,
                    minHeight: 30,
                    maxHeight: 60
                }}
                initialPosition={{
                    x: 20,
                    width: 60,
                    y: 20,
                    height: 60
                }}
            />
        </div>
    </Container>
);

export default CropImage;
