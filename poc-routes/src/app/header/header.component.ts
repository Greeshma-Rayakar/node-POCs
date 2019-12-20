import { Component, Output, EventEmitter } from "@angular/core";
import { AppService } from '../app.service';
import { Day } from '../app.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor( private appService : AppService ) { } 
  private day :Day ;
  @Output() dayToDisplay =  new EventEmitter<Day>();

  update(){
    this.appService.isWeekDay = false;
  }

  getMonday(){
    this.getMondayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
    
  }

  getMondayTime(){
    this.appService.getMonday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getTuesday(){
    this.getTuesdayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }

  getTuesdayTime(){
    this.appService.getTuesday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getWednesday(){
    this.getWednesdayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }

  getWednesdayTime(){
    this.appService.getWednesday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getThursday(){
    this.getThursdayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }

  getThursdayTime(){
    this.appService.getThursday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getFriday(){
    this.getFridayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }

  getFridayTime(){
    this.appService.getFriday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getSaturday(){
    this.getSaturdayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }
  getSaturdayTime(){
    this.appService.getSaturday().subscribe( (res)=>{
      this.day = res;
    });
  }

  getSunday(){
    this.getSundayTime();
    setTimeout(()=> {
      this.dayToDisplay.emit(this.day);
    },2000);
  }

  getSundayTime(){
    this.appService.getSunday().subscribe( (res)=>{
      this.day = res;
    });
  }
}
