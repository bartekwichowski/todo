import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  group: FormGroup = new FormGroup({
    task: new FormControl(),
    dateCreated: new FormControl()
  });

  private todo: Todo = new Todo();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.todoService.create(this.todo).subscribe(() => { this.router.navigate(['']);});
  }
    
}
