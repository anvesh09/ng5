import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number=4;
  btnText: string='Add an item';
  goalText:string='my first life goal';
  goals=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this.itemCount=this.goals.length;
    this._data.goal.subscribe(res=>this.goals=res);
    this._data.chnageGoal(this.goals);
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this._data.chnageGoal(this.goals);
  }

}
