import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IApiModel} from "../interfaces/apiModel.interface";

@Injectable()
export class ApiInitialService {
    getApiPaths(): Observable<IApiModel> {
        return of({

        })
    }
}