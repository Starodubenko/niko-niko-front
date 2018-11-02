import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ScrollService} from './service';

@Component({
  selector: 'app-scrollable-container',
  templateUrl: './ScrollableContainer.component.html',
  styleUrls: ['./ScrollableContainer.component.css']
})
export class ScrollableContainerComponent implements OnInit {
  @Input() viewWidth;
  @Input() viewHeight;
  @Input() scrollHeight;
  @Input() scrollWidth;
  @Input() scrollId;
  @Input() useOwnScroll = true;

  constructor(private elRef: ElementRef,
              private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.scrollService.getScrollChanges()
      .subscribe(({scroll, scrollId}) => {
        if (scrollId !== this.scrollId) {
          this.elRef.nativeElement.children[0].scrollLeft = scroll.target.scrollLeft;
          this.elRef.nativeElement.children[0].scrollTop = scroll.target.scrollTop;
        }
      });
  }

  onScroll(e) {
    e.preventDefault();
    this.scrollService.setScroll(e, this.scrollId);
  }
}
