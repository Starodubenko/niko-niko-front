import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
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

    @HostBinding('style.height.px') height = 0;
    @HostBinding('style.width.px') width = 0;
    @HostBinding('style.pointer-events') pe = 'auto';

    constructor(private elRef: ElementRef,
                private scrollService: ScrollService) {
    }

    ngOnInit() {
        this.height = this.viewHeight;
        this.width = this.viewWidth;
        this.pe = this.useOwnScroll ? 'auto' : 'none';


        if (this.useOwnScroll) {
            this.elRef.nativeElement.addEventListener('scroll', (event) => {
                this.scrollService.setScroll(event, this.scrollId);
            }, {
                capture: this.useOwnScroll
            });
        }

        if (!this.useOwnScroll) {
            this.scrollService.getScrollChanges()
                .subscribe(({scroll, scrollId}) => {
                    this.elRef.nativeElement.scrollLeft = scroll.target.scrollLeft;
                    this.elRef.nativeElement.scrollTop = scroll.target.scrollTop;
                });
        }
    }
}
