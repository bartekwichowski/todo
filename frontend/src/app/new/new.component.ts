import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  group: FormGroup = new FormGroup({
    title: new FormControl(),
    task: new FormControl(),
    dateCreated: new FormControl()
  });

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
