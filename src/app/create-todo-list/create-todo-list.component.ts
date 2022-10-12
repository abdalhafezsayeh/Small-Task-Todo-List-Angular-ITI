import { Component, OnInit } from '@angular/core';
import { TodoListServicesService } from '../todo-list-services.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IaboutTodoList, IaddTT } from 'src/models/IaboutTodoList';


@Component({
  selector: 'app-create-todo-list',
  templateUrl: './create-todo-list.component.html',
  styleUrls: ['./create-todo-list.component.scss']
})
export class CreateTodoListComponent implements OnInit {
  testform:FormGroup
  constructor(private ser:TodoListServicesService) { 
    // addform!:FormGroup;
    this.testform = new FormGroup ({

      Title:new FormControl("",[Validators.required]),

    })
  }

  ngOnInit(): void {
    
  }

add() {
  let user = this.testform.controls['Title'].value
  console.log(user)
 
  this.ser.addTodo(user).subscribe((d)=> {

    console.log(d)
  })
}


}

