import React from 'react';

import {
    Container
} from './../../../components';
import {
    ExampleProvider
} from './components/ExampleProvider';

import image1 from './images/image-1.jpg'
import image2 from './images/image-2.jpg';

export const CropImage = () => (
    <Container>
        <div>
            <h5>Default</h5>
            <p>
                Default configuration of the crop component.
            </p>
            <ExampleProvider
                src={ image1 }
            />
        </div>
        <div className="mt-4">
            <h5>Limit Crop Size</h5>
            <p>
                You can limit the crop size by providing crop percentage using <code>minWidth</code>, <code>maxWidth</code>, <code>minHeight</code> and <code>minHeight</code> props.
            </p>
            <ExampleProvider
                src={ image2 }
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
