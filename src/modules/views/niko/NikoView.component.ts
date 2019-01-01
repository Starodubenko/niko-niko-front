import {Component, OnInit} from '@angular/core';
import {ApiTeammateService} from "../../api";
import {nikoNikoDataConverter} from "../../core/adapter";

@Component({
    selector: 'app-niko-view',
    templateUrl: './NikoView.component.html',
    styleUrls: ['./NikoView.css']
})
export class NikoViewComponent implements OnInit {

    teammates = [];
    nikoNikoData = {};
    cellsCount = {rows: 5, cols: 10};

    constructor(private apiTeammateService: ApiTeammateService) {
    }

    ngOnInit() {
        this.teammates = this.apiTeammateService.getAll();

        this.nikoNikoData = nikoNikoDataConverter(this.teammates);
    }
}
