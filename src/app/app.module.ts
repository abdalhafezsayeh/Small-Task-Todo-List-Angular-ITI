import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AllTodoListComponent } from './all-todo-list/all-todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTodoListComponent } from './create-todo-list/create-todo-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DetailTodoListComponent } from './detail-todo-list/detail-todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AllTodoListComponent,
    CreateTodoListComponent,
    PageNotFoundComponentComponent,
    DetailTodoListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
