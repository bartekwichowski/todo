import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewComponent } from './new/new.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { TodoViewComponent } from './todo-view/todo-view.component';

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pl-PL"
    },
    {
      provide: MAT_DATE_LOCALE,
      useExisting: LOCALE_ID
    }
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    HomeComponent,
    NewComponent,
    MenuBarComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
