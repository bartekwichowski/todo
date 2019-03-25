import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from '../model/todo'
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/internal/operators';
import { Location } from '@angular/common';



@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {

  private todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.loadTodos();
  }

  ngOnChanges() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getAll().subscribe(
      (todos: Todo[])  => this.todos = todos);
  }

  edit(todo: Todo) {
      this.router.navigate(['edit', {id: todo.id,  task: todo.task, dateCreated: todo.dateCreated}])
  }

  view(id: number) {
    this.router.navigate(['todo/' + id]).then();
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(()  => {
      this.loadTodos();
    });
  }

}
