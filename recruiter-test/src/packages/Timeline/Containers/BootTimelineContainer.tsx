import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Progress} from "reactstrap";

@observer
class BootTimelineContainer extends Component {
    private store: any;

    constructor(props: any) {
        super(props);
        this.store = props.store;
        this.handleDecrementBar = this.handleDecrementBar.bind(this);
        this.handleIncrementBar = this.handleIncrementBar.bind(this);
    }

    handleIncrementBar = () => {
        this.store.incrementProgressBar(this.store);
    };

    handleDecrementBar = () => {
        this.store.decrementProgressBar(this.store);
    };

    public render() {
        // @ts-ignore
        return (
            <div>
                <button onClick={() => this.handleIncrementBar()}> + </button>
                <button onClick={() => this.handleDecrementBar()}> - </button>
                <div className="btComponent" style={{height: this.store.barSize, width: '100%'}}>
                    <Progress bar className={`${this.store.barColor != '' ? this.store.barColor : "bg-info"}`} value={this.store.valueCurrent} max={this.store.valueMax}>
                        {this.store.progressLabelPrev} {this.store.valueCurrent} {this.store.valueCurrentOnValueMax ? '/ ' + this.store.valueMax : ''} {this.store.progressLabelPost}
                    </Progress>
                </div>
            </div>
        );
    }
}

export default BootTimelineContainer;
