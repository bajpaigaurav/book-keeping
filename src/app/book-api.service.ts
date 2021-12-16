import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }


  submitBookBooking(request: any): Observable<any> {
    return this.http.get('assets/book-register-success.json');
    // return this.http.post(environment.urls.bookBooking + '/addBook', request);
  }
}
