import {Component} from '@angular/core';
import {AuthService} from "../../service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-out-button',
    templateUrl: './SignOutButton.component.html',
    styleUrls: ['./SignOutButton.css'],
})
export class SignOutButtonComponent {

    constructor(
        private authService: AuthService,
        private router: Router) {
    }

    signOut() {
        this.authService.signOut();
        this.router.navigate(['unauthorized']);
    }
}
