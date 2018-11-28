import { BootTimelineStore } from '../BootTimelineStore';
import BootTimelineService from '../BootTimelineService';

class BootTimelineController {
    private btStore: any;
    private btService: any;

    constructor() {
        this.btStore = new BootTimelineStore();
        this.btService = new BootTimelineService();
    }

    getBtStore() {
        return this.btStore;
    }
    getBtService() {
        return this.btService;
    }

    setBtValueCurrent(valueCurrent: number) {
        if (null != this.btStore) {
            this.btStore.setValueCurrent(valueCurrent);
        }
    }
    setBtBarColor(barColor: string) {
        if (null != this.btStore && null != this.btService) {
            let color = this.btService.getBtBarColor(barColor);
            this.btStore.setBarColor(color);
        }
    }
    setBtValueCurrentOnValueMax(valueCurrentOnValueMax: boolean) {
        if (null != this.btStore) {
            this.btStore.setValueCurrentOnValueMax(valueCurrentOnValueMax);
        }
    }
}

export default BootTimelineController;
