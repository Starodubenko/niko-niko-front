import {Component, OnInit} from '@angular/core';
import {MainViewService} from "./MainView.service";

@Component({
    selector: 'app-main-view',
    templateUrl: './MainView.component.html',
    styleUrls: ['./MainView.css'],
    providers: [
        MainViewService
    ]
})
export class MainViewComponent implements OnInit {

    currentMood: string;

    constructor(private mainViewComponentService: MainViewService) {
    }

    ngOnInit() {
        this.mainViewComponentService.connectToSocket();
        this.mainViewComponentService.data()
            .subscribe(currentMood => {
                this.currentMood = currentMood.mood;
            });
    }
}
