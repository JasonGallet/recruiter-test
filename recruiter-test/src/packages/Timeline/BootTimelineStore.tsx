import {action, computed, decorate, observable} from "mobx";

export class BootTimelineStore {
    valueMax = 100;
    valueCurrent = 25;
    progressLabel = '%';
    barColor = '';
    barSize = 20;

    resetProgressBar() {
        this.valueCurrent = 0;
    }

    // valueMax getter and setter.
    setValueMax(value: number) {
        this.valueMax = value;
    }
    get getValueMax() {
        return this.valueMax;
    }

    // valueCurrent getter and setter.
    setValueCurrent(value: number) {
        this.valueCurrent = value;
    }
    get getValueCurrent() {
        return this.valueCurrent;
    }
}

decorate(BootTimelineStore, {
    valueMax: observable,
    valueCurrent: observable,
    progressLabel: observable,
    barColor: observable,
    barSize: observable,
    resetProgressBar: action,
    setValueCurrent: action,
    getValueCurrent: computed,
    setValueMax: action,
    getValueMax: computed,
});
