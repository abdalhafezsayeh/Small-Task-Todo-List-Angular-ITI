import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItodoList } from 'src/models/ItodoList';
import { IaboutTodoList, IaddTT } from 'src/models/IaboutTodoList';
import { CAdd } from 'src/models/cAdd';
/**
 * Step One => Import Injectable From Angular Core
 * Step Two => Import Observable From rxjs angular 
 * Step Three => Import HttpClient From Angular common Http
 * Step Four => Import 2 InterFace 
 */

@Injectable({
  providedIn: 'root'
})


export class TodoListServicesService {

  constructor(private http: HttpClient) { }

  //GET ALL
  GetAll(): Observable<IaboutTodoList<ItodoList[]>> {
    return this.http.get<IaboutTodoList<ItodoList[]>>("https://api.mohamed-sadek.com/Task/Get");
  }



  //GET SINGLE
  GetSingle(id: number): Observable<IaboutTodoList<ItodoList>> {
    return this.http.get<IaboutTodoList<ItodoList>>("https://api.mohamed-sadek.com/Task/GetByID?id=" + id);


    

  }

  // Add Todo
  addTodo(id:IaddTT){

    return this.http.post("https://api.mohamed-sadek.com/Task/POST", {"Title":id})
    
  }

}