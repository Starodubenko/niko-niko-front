import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import jwtdecode from "jwt-decode";
import {BrowserStorageHelper} from "../utils";
import {UserDto} from "../../core/dto";

@Injectable()
export class AuthService {

    storageChanges$: BehaviorSubject<string>;

    constructor(private readonly http: HttpClient) {
        this.storageChanges$ = new BehaviorSubject(BrowserStorageHelper.getAuthToken());
    }

    signIn(username: string, password: string, rememberMe: boolean): Observable<string> {
        return this.http.post<string>('/api/auth/signIn', {
            username,
            password
        }).pipe(
            tap((data: any) => {
                const bearerToken = `Bearer ${data.token}`;

                BrowserStorageHelper.setAuthToken(bearerToken, rememberMe);
                this.storageChanges$.next(bearerToken);
            }),
            catchError((e: any) => {
                return of(e);
            })
        );
    }

    signOut() {
        this.storageChanges$.next(null);
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

    getUserInfo$(): Observable<UserDto> {
        return this.storageChanges$
            .pipe(map(token => token ? jwtdecode(token).data : null));
    }

    getUserInfo(): UserDto | null {
        return BrowserStorageHelper.getAuthToken()
            ? jwtdecode(BrowserStorageHelper.getAuthToken()).data
            : null;
    }
}