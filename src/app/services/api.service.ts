import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.api;

  constructor(private _httpClient: HttpClient) { }

  getDirectById(): Observable<any> {
    return this._httpClient.get(this.baseUrl + `/character`).pipe(
        map((res: any) => {
            return res;
        }),
        catchError((err: HttpErrorResponse) => {
            console.log(err.message);
            return of();
        })
    );
}
}
