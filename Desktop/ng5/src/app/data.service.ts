import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals= new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal=this.goals.asObservable();
  constructor() { }
  chnageGoal(goal){
    this.goals.next(goal);
  }
}
