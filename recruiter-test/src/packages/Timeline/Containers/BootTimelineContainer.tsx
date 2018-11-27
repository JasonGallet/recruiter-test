import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../BootTimelineStore';
import {Progress} from "reactstrap";
import {getBarColor} from "../BootTimelineService";

@observer
class BootTimelineContainer extends Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                // @ts-ignore
                <button onClick={store.incrementProgressBar}> + </button>
                <button onClick={store.decrementProgressBar}> - </button>
                <div className="btComponent" style={{height: store.barSize}}>

                    <Progress bar className={`progress-bar ${store.barColor != '' ? getBarColor(store.barColor) : "bg-info"}`} value={store.valueCurrent} max={store.valueMax}>
                        {store.valueCurrent} {store.progressLabel}
                    </Progress>
                </div>
                { store.counter }
            </div>
        );
    }
}

export default BootTimelineContainer;
