import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TestContainer extends Component<{BootTimeline: any}> {
    private bootTimeline: any;

    constructor(props: any) {
        super(props);
        this.bootTimeline = props.BootTimeline;
    }

    public render() {
        return (
            <div className="TestContainer">
                <button onClick={() => this.bootTimeline.setBtValueCurrent(37) }> 37 (Current: { this.bootTimeline.getBtStore().getValueCurrent }) </button>
            </div>
        );
    }
}

export default TestContainer;
