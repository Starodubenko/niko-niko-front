import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamSelectorService} from "./service";
import {IShortTeamDto} from "../core/dto";

@Component({
    selector: 'app-team-selector',
    templateUrl: './TeamSelector.component.html',
    styleUrls: ['./TeamSelector.component.css'],
    providers: [
        TeamSelectorService
    ]
})
export class TeamSelectorComponent implements OnInit, OnChanges {

    @Input() teamId: string;

    isLoading = true;
    form: FormGroup;
    teamList: IShortTeamDto[];

    constructor(private fb: FormBuilder,
                private teamSelectorService: TeamSelectorService,
                private router: Router) {
    }


    ngOnInit() {
        this.form = this.fb.group({
            teamId: [this.teamId],
        });

        this.teamSelectorService.currentTeam()
            .subscribe(teamData => {
                this.teamList = teamData.teamList;
                this.isLoading = false;
            });

        this.form.get('teamId').valueChanges
            .subscribe(teamId => {
                this.router.navigate(['team', teamId]);
        })
    }

    ngOnChanges(changes: SimpleChanges): void {

    }
}
