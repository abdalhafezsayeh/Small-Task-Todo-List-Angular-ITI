import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodoListComponent } from './all-todo-list/all-todo-list.component';
import { CreateTodoListComponent } from './create-todo-list/create-todo-list.component';
import { DetailTodoListComponent } from './detail-todo-list/detail-todo-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  
  {path:"create", component:CreateTodoListComponent},
  {path:"allTodo", component:AllTodoListComponent},
  {path:"allTodo/ditails/:id", component:DetailTodoListComponent},
  { path: '',   redirectTo: 'allTodo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
