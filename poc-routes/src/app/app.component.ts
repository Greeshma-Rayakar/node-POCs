import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Day } from './app.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
constructor(private appService : AppService, private datePipe: DatePipe){

}

selectedDay: Day;

displayDay(day: Day){
  let daysnow = new Day();
  daysnow = day;
  this.selectedDay = daysnow;
  var strDateTime = this.datePipe.transform(this.selectedDay.dateString, 'EEE MMM dd yyyy HH:mm:ss');
  var myDate = new Date(strDateTime);
  this.selectedDay.dateString = myDate.toString(); 
}
 
}
