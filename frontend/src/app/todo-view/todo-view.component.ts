import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todo: Todo = new Todo();

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todo.id = +id;
    }

    let date = this.route.snapshot.paramMap.get('dateCreated');
    if (date) {
      this.todo.dateCreated = new Date(date);
    }
    this.todo.task = this.route.snapshot.paramMap.get('task');
    this.todo.title = this.route.snapshot.paramMap.get('title');
  }

  create() {
    this.todoService.create(this.todo).subscribe(() => { this.router.navigate(['']);});
  }

  back() {
    this.location.back();
  }

}
