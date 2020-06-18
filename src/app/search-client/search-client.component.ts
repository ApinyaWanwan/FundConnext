import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Clients } from '../model/clients.model';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {
  clientList: Clients[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(data => {
      this.clientList = data;
    }, (err) => {
      console.log('Get clients error: ', err);
    });
  }

}
