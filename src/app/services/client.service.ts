import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../model/clients.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Clients[]> {
    return this.http.get<[]>('../assets/clients.json');
  }
}
