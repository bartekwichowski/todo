import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todo: Todo = new Todo();

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute, private location: Location) { }

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

  edit() {
    this.router.navigate(['edit', {id: this.todo.id,  title: this.todo.title, task: this.todo.task, dateCreated: this.todo.dateCreated}])
  }

  back() {
    this.location.back();
  }

}
