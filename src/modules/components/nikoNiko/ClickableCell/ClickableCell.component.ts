import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-clickable-cell',
    templateUrl: './ClickableCell.component.html',
    styleUrls: ['./ClickableCell.component.css']
})
export class ClickableCellComponent implements OnInit {
    @Input() contentToShow;
    @Input() allData;

    @HostBinding('style.pointer-events') pe = 'auto';

    @HostListener('click')
    onClick() {
        console.log(this.allData);
    }

    ngOnInit() {

    }
}
