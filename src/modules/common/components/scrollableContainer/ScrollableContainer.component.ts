import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ScrollService} from './service';

@Component({
    selector: 'app-scrollable-container',
    templateUrl: './ScrollableContainer.component.html',
    styleUrls: ['./ScrollableContainer.component.css']
})
export class ScrollableContainerComponent implements OnInit {
    @Input() viewWidth;
    @Input() viewHeight;
    @Input() scrollHeight = 0;
    @Input() scrollWidth = 0;
    @Input() scrollId;
    @Input() useOwnScroll = true;
    @Input() containerTemplate = false;

    @ViewChild('scrollableView') scrollableView;

    @HostBinding('style.height.px') height = 0;
    @HostBinding('style.width.px') width = 0;
    @HostBinding('style.display') pe = 'flex';

    constructor(private scrollService: ScrollService) {
    }

    ngOnInit() {
        this.height = this.viewHeight;
        this.width = this.viewWidth;

        if (!this.useOwnScroll) {
            this.scrollService.getScrollChanges()
                .subscribe(({scroll}) => {
                    console.log(this.scrollId);
                    this.scrollableView.nativeElement.scrollLeft = scroll.target.scrollLeft;
                    this.scrollableView.nativeElement.scrollTop = scroll.target.scrollTop;
                });
        }
    }

    onScroll() {
        if (this.useOwnScroll) {
            console.log(this.scrollId);
            this.scrollService.setScroll(event, this.scrollId);
        }
    }
}
