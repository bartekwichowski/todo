import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router,
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

  edit(todo: Todo) {
    this.router.navigate(['edit', {id: todo.id,  title: todo.title, task: todo.task, dateCreated: todo.dateCreated}])
  }

  view(id: number) {
    this.router.navigate(['todo/' + id]).then();
  }

  update(todo: Todo) {
    console.log(todo.isDone);
    this.todoService.create(todo).subscribe(() => {});
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(()  => {
      console.log('Todo deleted: ', id)
      // this.loadTodos();
    });
  }

}
