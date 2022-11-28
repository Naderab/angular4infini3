import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/todo';
import { CalculserviceService } from '../services/calculservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

todolist!:Todo[]
  constructor(private calculservice:CalculserviceService) { }
  
  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem",
      "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
  
  }
  n!:number;
  bilan(){
    this.n=this.calculservice.getNumberOf(this.todolist,'completed',true);
  }

}
