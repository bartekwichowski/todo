import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, 
    private location: Location, private router: Router) {
    
  }

  loadData(id: number) {
    this.todoService.get(id).subscribe((todo: Todo)  => {
      this.todo = todo;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.loadData(params['id'])
    );
  }

  back() {
    this.location.back();
  }

  edit() {
    this.router.navigate(['edit', { task: this.todo.task, dateCreated: this.todo.dateCreated}])
  }
}
