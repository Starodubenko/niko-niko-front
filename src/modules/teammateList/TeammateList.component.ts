import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {TeammateListService} from "./service";
import {IShortTeammateDto} from "../core/dto";

@Component({
    selector: 'app-teammate-list',
    templateUrl: './TeammateList.component.html',
    styleUrls: ['./TeammateList.component.css'],
    providers: [
        TeammateListService
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeammateListComponent implements OnChanges {

    @Input() teamId: string;

    teammateList: IShortTeammateDto[];

    constructor(private teammateListService: TeammateListService) {}

    ngOnChanges() {
        this.teammateListService.getTeammateList(this.teamId)
            .subscribe(newTeammateList => {
                this.teammateList = newTeammateList;
            })
    }
}
