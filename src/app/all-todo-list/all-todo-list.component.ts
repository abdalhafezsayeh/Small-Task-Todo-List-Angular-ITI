import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItodoList } from 'src/models/ItodoList';
import { TodoListServicesService } from '../todo-list-services.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Step One => Import Subscription From Liberry rxjs
 * Step Two => Use Ng On Inite And Create Function OnInt
 * Step Three => Recepion Services Inside constructor With Name Class Services 
 * Step Four => Create Variable Of Type Subscription
 * step five => implement Indise Function OnInt 
 * 1 -  
 */

@Component({
  selector: 'app-all-todo-list',
  templateUrl: './all-todo-list.component.html',
  styleUrls: ['./all-todo-list.component.scss']
})
export class AllTodoListComponent implements OnInit {

sub!:Subscription
  showAllTodo: ItodoList[] = [];
  id!: number;
  constructor(private resTodoList:TodoListServicesService, private _router:Router,private active: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.sub = this.resTodoList.GetAll().subscribe({


        next:(allData) => { 

          
          this.showAllTodo = allData.Data

          // console.log(this.showAllTodo) // test 

        }

    })


    this.id = Number(this.active.snapshot.paramMap.get('id'))
    this.resTodoList.GetSingle(this.id).subscribe(
      (resp) => {
        console.log(resp) // test
      }
    )

  }

  remove(index:number)
  {
    if(index !== -1) {
      this.showAllTodo.splice(index, 1)
    }

  }

}
