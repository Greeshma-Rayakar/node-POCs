import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public now: Date = new Date();

  constructor() {
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }

  ngOnInit() {
  }

}
