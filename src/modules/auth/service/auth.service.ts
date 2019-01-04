import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import jwtdecode from "jwt-decode";
import {BrowserStorageHelper} from "../utils";
import {UserDto} from "../../core/dto";

@Injectable()
export class AuthService {

    constructor(private readonly http: HttpClient) {}

    signIn(username: string, password: string, rememberMe: boolean): Observable<string> {
        return this.http.post<string>('/api/auth/signIn', {
            username,
            password
        }).pipe(
            tap((data: any) => {
                const bearerToken = `Bearer ${data.token}`;

                BrowserStorageHelper.setAuthToken(bearerToken, rememberMe)
            }),
            catchError((e: any) => {
                return of(e);
            })
        );
    }

    signOut() {
        BrowserStorageHelper.removeAuthToken();
    }

    signUp(): Observable<string> { //token in response
        return this.http.post<string>('/api/auth/signUp', {});
    }

    checkUrlPathAccessibility(path: string): Observable<boolean> {
        const token = BrowserStorageHelper.getAuthToken();
        const isUnauthorizedPage = !!path.split('/').find(item => item === 'unauthorized');

        if (token && isUnauthorizedPage) {
            return of(false);
        }

        return this.http.post<boolean>('/api/auth/checkUrlPathAccessibility', {
            token,
            path
        });
    }

    getUserInfo(): UserDto | null {
        return BrowserStorageHelper.getAuthToken()
            ? jwtdecode(BrowserStorageHelper.getAuthToken()).data
            : null;
    }
}