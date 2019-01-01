import {Component, Input} from '@angular/core';
import {MoodType} from "../constants";

@Component({
    selector: 'app-mood-item',
    templateUrl: './MoodItem.component.html',
    styleUrls: ['./MoodItem.component.css']
})
export class MoodItemComponent {
    @Input() mood: MoodType;
    @Input() selected: boolean;
}
