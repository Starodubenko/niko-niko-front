import {Injectable, OnDestroy} from "@angular/core";
import {MoodService} from "../../mood/service/Mood.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/service";

@Injectable()
export class MoodSelectorService implements OnDestroy {

    constructor(private moodService: MoodService,
                private authService: AuthService,
                private router: Router) {
        this.moodService.connectSocket();
    }

    selectMood(moodLevel: string){
        this.moodService.selectMood(moodLevel);
    }

    currentMood(){
        return this.moodService.getCurrentMood();
    }

    redirectToTeamView() {
        const userTeamId = this.authService.getUserInfo().team.id;
        this.router.navigate(['team', userTeamId]);
    }

    ngOnDestroy(): void {
        this.moodService.disconnectSocket();
    }
}