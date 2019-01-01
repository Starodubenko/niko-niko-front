import {Injectable, OnDestroy} from "@angular/core";
import {MoodService} from "../../mood/service/Mood.service";

@Injectable()
export class MoodSelectorService implements OnDestroy {

    constructor(private moodService: MoodService) {
        this.moodService.connectSocket();
    }

    selectMood(moodLevel: string){
        this.moodService.selectMood(moodLevel);
    }

    currentMood(){
        return this.moodService.getCurrentMood();
    }


    ngOnDestroy(): void {
        this.moodService.disconnectSocket();
    }
}