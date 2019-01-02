import {Component, OnInit} from '@angular/core';
import {MoodSelectorService} from "./service";
import {MoodType} from "../mood/constants";

@Component({
    selector: 'app-mood-selector',
    templateUrl: './MoodSelector.component.html',
    styleUrls: ['./MoodSelector.component.css'],
    providers: [
        MoodSelectorService
    ]
})
export class MoodSelectorComponent implements OnInit {

    moodType =  MoodType;
    currentMoodLevel = null;

    constructor(private moodSelectorService: MoodSelectorService) {}

    onMoodClick(moodLevel: string) {
        this.moodSelectorService.selectMood(moodLevel);
    }

    isVisible(moodLevel: string) {
        return !this.currentMoodLevel || this.currentMoodLevel === moodLevel;
    }

    ngOnInit() {
        this.moodSelectorService.currentMood()
            .subscribe(moodLevel => {
                this.currentMoodLevel = moodLevel;
            });
    }
}
