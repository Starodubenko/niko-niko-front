import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service";

enum FormFieldNames {
    Username = 'username',
    Password = 'password',
    RememberMe = 'rememberme',
}

@Component({
    selector: 'app-sign-in',
    templateUrl: './SignInForm.component.html',
    styleUrls: ['./SignInForm.css'],
})
export class SignInFormComponent implements OnInit {

    form: FormGroup;
    formFieldNames = FormFieldNames;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            [FormFieldNames.Username]: [''],
            [FormFieldNames.Password]: [''],
            [FormFieldNames.RememberMe]: [false],
        })
    }

    submit() {
        const formValue = this.form.value;

        this.authService.signIn(
            formValue[FormFieldNames.Username],
            formValue[FormFieldNames.Password],
            formValue[FormFieldNames.RememberMe]
        ).subscribe(_ => _);
    }
}
