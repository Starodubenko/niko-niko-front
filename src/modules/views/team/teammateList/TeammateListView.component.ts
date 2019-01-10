import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-teammateList-view',
    templateUrl: './TeammateListView.component.html',
    styleUrls: ['./TeammateListView.css']
})
export class TeammateListViewComponent implements OnInit {

    teamId: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.teamId = params.id;
        });
    }
}
