import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' :  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getGreeting$ = this.http.get<any>('/accommodations/api/v1/index/greeting', this.httpOptions).pipe(
    map(r => r),
    tap(r => console.log(r)),
    shareReplay(1),
    catchError(this.handleError)
  );

  handleError(e: any) {
    let errorMessage: string;
    if (e.error || e.error instanceof ErrorEvent) errorMessage = `An error occurred: ${e.message}`;
    else errorMessage = `Backend returned code ${e.status}: ${e.message}`;
    return throwError(errorMessage);
  }
}
