import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EcomResponse} from "./ecom-response";
import {RequestOptions, Http, Headers, Response} from "@angular/http";

@Injectable()
export class FileService {
  uploadUrl:string='/upload';
  arrDownload:any = [];
  agentType:any = [];
  export:any = {};
  dateSearch:any = {};
  constructor (private http: Http,) {

  }
  upload(files: File[], option: any, headers?: Headers):Observable<EcomResponse>{
    const file = files[0];
    const formData = new FormData();

    formData.append('fileUpload', file);
    formData.append('thumbnail', option.thumbnail);
    let options = new RequestOptions({ headers });
    return this.http.post(this.uploadUrl, formData, options).map(this.extractData).catch(this.handleError)
  }
  download(fileName){

  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
