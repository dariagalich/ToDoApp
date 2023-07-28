import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnDestroy{

  @Input() task!: Task
  @Output() onRemove = new EventEmitter<number>()

  removeTask(){
     this.onRemove.emit(this.task.id)
  }

  ngOnDestroy() {
  }


}
