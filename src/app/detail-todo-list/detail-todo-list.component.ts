import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItodoList } from 'src/models/ItodoList';
import { TodoListServicesService } from '../todo-list-services.service';

@Component({
  selector: 'app-detail-todo-list',
  templateUrl: './detail-todo-list.component.html',
  styleUrls: ['./detail-todo-list.component.scss']
})
export class DetailTodoListComponent implements OnInit {
  id: number = 0
  OneTodo!:ItodoList
  constructor(private ser: TodoListServicesService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.active.snapshot.paramMap.get('id'))
    this.ser.GetSingle(this.id).subscribe(
      (resp) => {
        this.OneTodo= resp.Data
      }
    )

  }

}
