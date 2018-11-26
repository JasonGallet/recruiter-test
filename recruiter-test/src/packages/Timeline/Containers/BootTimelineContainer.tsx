import React, { Component } from 'react';
import { BootTimelineComponent } from '../Components/BootTimelineComponent';
import { BootTimelineStore } from '../BootTimelineStore';

const btStore = new BootTimelineStore();

class BootTimelineContainer extends Component {
    public render() {
        return (
            <div className={`BootTimelineContainer`}>
                <BootTimelineComponent store={ btStore }/>
            </div>
        );
    }
}

export default BootTimelineContainer;
