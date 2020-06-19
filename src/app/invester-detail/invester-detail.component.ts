import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvesterService } from '../services/invester.service';
import { Invester } from '../model/invester.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-invester-detail',
  templateUrl: './invester-detail.component.html',
  styleUrls: ['./invester-detail.component.scss']
})
export class InvesterDetailComponent implements OnInit {
  clientId: string;
  investerList: Invester[];
  filterInvester: Invester[] = [];
  sum: string;

  constructor(
    private route: ActivatedRoute,
    private investerService: InvesterService
  ) {}

  async ngOnInit() {
    this.clientId = this.getClientIdFromRoute();
    await this.getDetails();
    await this.setInvesterById(this.investerList);
    await this.summaryTHB();
  }

  getClientIdFromRoute() {
    return this.route.snapshot.paramMap.get('clientId');
  }

  async getDetails() {
    try {
      this.investerList = await this.investerService.getDetails().pipe(first()).toPromise();
    } catch (err) {
      console.log('Get invester details error: ', err);
    }
  }

  setInvesterById(investerList: Invester[]) {
    investerList.forEach(el => {
      if (el.investor_id === Number(this.clientId)) {
        this.filterInvester.push(el);
      }
    });

  }

  summaryTHB() {
    let s = 0.00;
    this.filterInvester.forEach(item => {
      s =  s + item.thb;
      this.sum = s.toFixed(2);
    });

  }
}
