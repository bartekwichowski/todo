import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
      {
        component: HomeComponent,
        path: '',
        data: { state: 'home' } 
      },
      {
        component: TodoComponent,
        path: 'todo/:id',
        data: { state: 'todo' } 
      },
      {
        component: NewComponent,
        path: 'new',
        data: { state: 'new' } 
      },
      {
        component: NewComponent,
        path: 'edit',
        data : {state: 'edit'}
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
