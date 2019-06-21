import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, 
    private location: Location) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.loadData(params['id'])
    );
  }

  loadData(id: number) {
    this.todoService.get(id).subscribe((todo: Todo)  => {
      this.todo = todo;
    });
  }

  back() {
    this.location.back();
  }
}
