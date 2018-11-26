import * as React from 'react';
import { getBarColor } from '../BootTimelineService';
import { Progress } from 'reactstrap';
import {observer} from "mobx-react";

@observer
export class BootTimelineComponent extends React.Component {
    render() {
        const { btStore } = this.props;
        return (
            <div className="progress" style={{height: btStore.barSize}}>
                <Progress bar className={`progress-bar ${btStore.barColor != '' ? getBarColor(btStore.barColor) : "bg-info"}`} value={btStore.valueCurrent} max={btStore.valueMax}>
                    {btStore.valueCurrent} {btStore.progressLabel}
                </Progress>
            </div>
        );
    }
}
