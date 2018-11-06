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
    @Input() onClickDisable = false;

    @HostBinding('style.height.px') height = 0;
    @HostBinding('style.width.px') width = 0;
    @HostBinding('style.display') pe = 'block';

    constructor(private elRef: ElementRef,
                private scrollService: ScrollService) {
    }

    ngOnInit() {
        this.height = this.viewHeight;
        this.width = this.viewWidth;

        if (this.onClickDisable) {
            this.scrollService.isDisableMasterScroll().subscribe(isDisable => {
                this.pe = isDisable ? 'none' : 'block';
            });
        }

        if (this.useOwnScroll) {
            this.elRef.nativeElement.addEventListener('scroll', (event) => {
                this.scrollService.setScroll(event, this.scrollId);
            });
        }

        if (!this.useOwnScroll) {
            this.scrollService.getScrollChanges()
                .subscribe(({scroll}) => {
                    this.elRef.nativeElement.scrollLeft = scroll.target.scrollLeft;
                    this.elRef.nativeElement.scrollTop = scroll.target.scrollTop;
                });
        }
    }
}
