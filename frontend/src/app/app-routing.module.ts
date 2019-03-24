import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
      {
        component: HomeComponent,
        path: ''
      },
      {
        component: TodoComponent,
        path: 'todo/:id'
      },
      {
        component: NewComponent,
        path: 'new'
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
