import * as React from 'react';
import { Progress } from 'reactstrap';

// @ts-ignore
export const BootTimelineComponent = (store: any, handleInc: any, handleDec: any) => (
    <div>
        <button onClick={() => handleInc}> + </button>
        <button onClick={() => handleDec}> - </button>
        <div className="btComponent" style={{height: store.barSize, width: '100%'}}>

            <Progress bar className={`${store.barColor != '' ? "bg-info" : "bg-info"}`} value={store.valueCurrent} max={store.valueMax}>
                {store.valueCurrent} {store.progressLabel}
            </Progress>
        </div>
        { store.counter }
    </div>
    );
