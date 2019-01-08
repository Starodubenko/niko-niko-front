import {Injectable, OnDestroy} from "@angular/core";
import {MoodService} from "../../mood/service/Mood.service";
import {Router} from "@angular/router";

@Injectable()
export class MoodSelectorService implements OnDestroy {

    constructor(private moodService: MoodService,
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
        this.router.navigate(['team']);
    }

    ngOnDestroy(): void {
        this.moodService.disconnectSocket();
    }
}