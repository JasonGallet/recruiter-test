import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TestContainer extends Component<{bootTimeline: any}> {
    public render() {
        return (
            <div>
                { this.props.bootTimeline.getBtStore().valueCurrent }
            </div>
        );
    }
}

export default TestContainer;
