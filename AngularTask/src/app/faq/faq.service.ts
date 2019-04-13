import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { IFaqmodel } from './Ifaqmodel';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private FaqListUrl = 'api/Faqs.json';

  constructor(private http: HttpClient) { }

  getFaqList(): Observable<IFaqmodel[]>{
    return this.http.get<IFaqmodel[]>(this.FaqListUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if(err.error instanceof ErrorEvent){
      errMessage = `An error occured: ${err.error.message}`;
    }
    else
    {
      errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errMessage);
    return throwError(errMessage);
  }
}
