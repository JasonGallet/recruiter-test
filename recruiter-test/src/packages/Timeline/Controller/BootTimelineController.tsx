import { BootTimelineStore } from '../BootTimelineStore';
import BootTimelineService from '../BootTimelineService';
import { Component } from "react";
import BootTimelineContainer from "../Containers/BootTimelineContainer";
import React from "react";
// @ts-ignore
import autoBind from 'react-autobind';

class BootTimelineController extends Component {
    private btStore: any;
    private btService: any;

    constructor(props: any) {
        super(props);
        autoBind(this);
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
        this.btStore.setValueCurrent(valueCurrent);
    }
    setBtBarColor(barColor: string) {
        let color = this.btService.getBtBarColor(barColor);
        this.btStore.setBarColor(color);
    }
    setBtValueCurrentOnValueMax(valueCurrentOnValueMax: boolean) {
        this.btStore.setValueCurrentOnValueMax(valueCurrentOnValueMax);
    }
    setBtValueMax(valueMax: number) {
        this.btStore.setValueMax(valueMax);
    }
    incrementBtLine() {
        if (this.btStore.valueCurrent < this.btStore.valueMax) {
            this.btStore.incrementProgressBar();
        }
    }
    decrementBtLine() {
        if (this.btStore.valueCurrent > this.btStore.valueMin) {
            this.btStore.decrementProgressBar();
        }
    }
    public render() {
        return (
            <BootTimelineContainer store={ this.btStore } service={ this.btService }/>
        );
    }
}

export default BootTimelineController;
