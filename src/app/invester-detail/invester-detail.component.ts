import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invester-detail',
  templateUrl: './invester-detail.component.html',
  styleUrls: ['./invester-detail.component.scss']
})
export class InvesterDetailComponent implements OnInit {
  clientId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getExtras();
  }

  getExtras() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clientId = this.router.getCurrentNavigation().extras.state.clientId;
      }
    });
  }
}
