import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {TeamSelectorService} from "./service";
import {IShortTeamDto, IShortTeammateDto} from "../core/dto";

@Component({
    selector: 'app-team-selector',
    templateUrl: './TeamSelector.component.html',
    styleUrls: ['./TeamSelector.component.css'],
    providers: [
        TeamSelectorService
    ]
})
export class TeamSelectorComponent implements OnInit {

    isLoading = true;
    form: FormGroup;
    teamList: IShortTeamDto[];
    teammateList: IShortTeammateDto[];

    constructor(private fb: FormBuilder,
                private teamSelectorService: TeamSelectorService) {
    }


    ngOnInit() {
        this.teamSelectorService.currentTeam()
            .subscribe(teamData => {
                this.form = this.fb.group({
                    teamId: [teamData.currentTeamId],
                });
                this.teamList = teamData.teamList;
                this.isLoading = false;
            });

        this.form.get('teamId').valueChanges
            .pipe(
                switchMap(currentTeamId => {
                    return this.teamSelectorService.selectTeam(currentTeamId);
                })
            ).subscribe(newTeammateList => {
                this.teammateList = newTeammateList;
        })
    }
}
