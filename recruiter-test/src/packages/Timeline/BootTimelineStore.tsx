import {action, computed, observable} from "mobx";

export class BootTimelineStore{
    @observable valueMax = 100;
    @observable valueCurrent = 25;
    @observable progressLabelPost = '';
    @observable progressLabelPrev = 'Question';
    @observable barColor = '';
    @observable barSize = 20;
    @observable counter = 0;
    @observable valueCurrentOnValueMax = false;

    @action resetProgressBar() {
        this.valueCurrent = 0;
    }

    @action incrementProgressBar(store: any) {
        return store.valueCurrent++;
    }
    @action decrementProgressBar(store: any) {
        return store.valueCurrent--;
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
}

export default new BootTimelineStore();
