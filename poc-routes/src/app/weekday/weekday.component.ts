import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Day } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss']
})
export class WeekdayComponent {

  constructor( private appService : AppService) { }

  @Input() currentDay : Day;

}
