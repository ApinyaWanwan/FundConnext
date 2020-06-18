import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invester-detail',
  templateUrl: './invester-detail.component.html',
  styleUrls: ['./invester-detail.component.scss']
})
export class InvesterDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getExtras();
  }

  getExtras() {

  }
}
