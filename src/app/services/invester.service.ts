import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invester } from '../model/invester.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvesterService {

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Invester[]> {
    return this.http.get<[]>('../assets/invester-detail.json');
  }
}
