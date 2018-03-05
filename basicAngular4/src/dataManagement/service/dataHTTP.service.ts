import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { IElementDefinition } from '../UI/model/ElementDefinition';
//import 'rxjs/Rx';
//import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { IForm } from '../model/form/form';

@Injectable()
export class DataHTTPService {

    private _options: RequestOptions;

    constructor(private http: Http) {}

    public InitializeOptions(userToken: string) {
        let headers = new Headers({
            'Authorization': 'bearer ' + userToken,
            'Content-Type': 'application/json; charset=utf-8'
        });
        this._options = new RequestOptions({ headers: headers });
    }

    private processData(res: Response) {
        //this._records.
        let body = res.json() || { Content: [], DependentContent: [] };

        return body || {}; //TODO: Need an 'Empty records type' for || error state.
    }

    protected handleError(error: Response) {
        // ErrorManager.HandleError(error);
        //console.error('observable error: ', error);
        return error.statusText;
    }

    getContent(restPath: string): Observable<IForm> {
        console.error('getContent');
        return this.http.get(restPath, this._options)
            .map(response => response.json()
            .catch(this.handleError));
    }

    postContent(content: any[], restPath: string): Observable<IForm> {

        return this.http.post(
            restPath
            , content
            , this._options)
            .map(response => response.json())
        .catch(this.handleError);
    }
}