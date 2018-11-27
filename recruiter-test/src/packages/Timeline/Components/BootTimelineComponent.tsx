import * as React from 'react';
import { getBarColor } from '../BootTimelineService';
import { Progress } from 'reactstrap';

// @ts-ignore
export const BootTimelineComponent = ({store}) => (
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
