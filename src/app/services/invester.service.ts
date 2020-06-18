import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvesterService {

  constructor(private http: HttpClient) { }

  getDetails() {
    this.http.get('../assets/invester-detail.json');
  }
}
