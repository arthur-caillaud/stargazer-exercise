import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';

import config from './config.json';

export default class MyUploader extends Component {
    render() {
        return (
            <ImagesUploader
                url={config.backend.uploadadress}
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
                />
        );
    }
}
