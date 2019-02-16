import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  get(id: number) {
    return this.http.get<Todo>('/api/todo/' + id);
  }

  create(todo: Todo) {
    return this.http.post<Todo>('/api/todo', todo);
  }

  delete(id: number) {
    return this.http.delete<Todo>('/api/todo/' + id);
  }

}
