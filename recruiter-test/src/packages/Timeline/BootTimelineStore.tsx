import {action, computed, observable} from "mobx";

export class BootTimelineStore {
    @observable valueMax = 100;
    @observable valueCurrent = 25;
    @observable progressLabel = '%';
    @observable barColor = '';
    @observable barSize = 20;
    @observable counter = 0;

    constructor () {
        window.setInterval(() => this.counter++, 500);
    }

    @action resetProgressBar() {
        this.valueCurrent = 0;
    }

    @action incrementProgressBar() {
        this.valueCurrent++;
    }
    @action decrementProgressBar() {
        this.valueCurrent--;
    }
    // valueMax getter and setter.
    @action setValueMax(value: number) {
        this.valueMax = value;
    }
    @computed get getValueMax() {
        return this.valueMax;
    }

    // valueCurrent getter and setter.
    @action setValueCurrent(value: number) {
        this.valueCurrent = value;
    }
    @computed get getValueCurrent() {
        return this.valueCurrent;
    }
}

export default new BootTimelineStore();
