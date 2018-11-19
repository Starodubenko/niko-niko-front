import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-clickable-cell',
    templateUrl: './ClickableCell.component.html',
    styleUrls: ['./ClickableCell.component.css']
})
export class ClickableCellComponent implements OnInit {
    @Input() contentToShow;
    @Input() allData;

    @HostListener('mouseup') // like an onClick once mouse up event happened
    onMouseOver() {
        console.log(this.allData);
    }

    ngOnInit() {

    }
}
