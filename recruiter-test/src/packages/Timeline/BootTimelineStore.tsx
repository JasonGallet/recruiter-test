import {action, computed, observable} from "mobx";

export class BootTimelineStore{
    @observable valueMax = 100;
    @observable valueMin = 0;
    @observable valueCurrent = 25;
    @observable progressLabelPost = '';
    @observable progressLabelPrev = 'Question';
    @observable barColor = '';
    @observable barSize = 20;
    @observable counter = 0;
    @observable valueCurrentOnValueMax = false;
    @observable btHidden = false;

    @action resetProgressBar() {
        this.valueCurrent = 0;
    }

    @action incrementProgressBar() {
        this.valueCurrent = this.valueCurrent + 1;
    }
    @action decrementProgressBar() {
        this.valueCurrent = this.valueCurrent - 1;
    }

    // GETTERS AND SETTERS
    // valueMax.
    @action setValueMax(value: number) {
        this.valueMax = value;
    }
    @computed get getValueMax() {
        return this.valueMax;
    }
    // valueCurrent.
    @action setValueCurrent(value: number) {
        this.valueCurrent = value;
    }
    @computed get getValueCurrent() {
        return this.valueCurrent;
    }
    // barColor.
    @action setBarColor(value: string) {
        this.barColor = value;
    }
    @computed get getBarColor() {
        return this.barColor;
    }
    // valueCurrentOnValueMax.
    @action setValueCurrentOnValueMax(valueCurrentOnValueMax: boolean) {
        this.valueCurrentOnValueMax = valueCurrentOnValueMax;
    }
    @computed get getValueCurrentOnValueMax() {
        return this.valueCurrentOnValueMax;
    }
    // btHidden.
    @action setBtHidden(hidden: boolean) {
        this.btHidden = hidden;
    }
    @computed get getBtHidden() {
        return this.btHidden;
    }
}

export default new BootTimelineStore();
