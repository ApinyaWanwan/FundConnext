import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvesterService } from '../services/invester.service';
import { Invester } from '../model/invester.model';

@Component({
  selector: 'app-invester-detail',
  templateUrl: './invester-detail.component.html',
  styleUrls: ['./invester-detail.component.scss']
})
export class InvesterDetailComponent implements OnInit {
  clientId: string;
  investerDetailList: Invester[];
  investerDetail: Invester;

  constructor(
    private route: ActivatedRoute,
    private investerService: InvesterService
  ) {}

  ngOnInit() {
    this.clientId = this.getClientIdFromRoute();
    this.getDetails();
  }

  getClientIdFromRoute() {
    return this.route.snapshot.paramMap.get('clientId');
  }

  getDetails() {

  }
}
