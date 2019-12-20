import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Day } from './app.model';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { stringify } from 'querystring';
import { WeekDay } from '@angular/common';

@Injectable({providedIn: 'root'})

export class AppService{

    constructor(private httpClient: HttpClient){
        
    }

    private currentDay = new Day();
    isWeekDay: boolean = false;
    loading: boolean  = false;

    getMonday() : Observable<Day> {
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/monday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }

    getCurrentDay(): Day{
        return this.currentDay;
    }

    getTuesday()  : Observable<Day> {
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/tuesday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }

    getWednesday() : Observable<Day>{
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/wednesday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }

    getThursday() : Observable<Day>{
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/thursday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }

    getFriday() : Observable<Day> {
        this.isWeekDay = true; 
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/friday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }

    getSaturday() : Observable<Day>{
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/saturday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
         
    }

    getSunday() : Observable<Day>{
        this.isWeekDay = true;
        this.loading = true;
        return this.httpClient.get<{dateString: string, weekDay:string}>('http://localhost:3000/api/sunday')
        .pipe(map( (responseData)  => {
            let dayNow = new Day();
            dayNow.dateString = responseData.dateString;
            dayNow.weekDay = responseData.weekDay;
            this.currentDay = dayNow;
            this.loading = false;
            return this.currentDay;
        })
        );
    }
}