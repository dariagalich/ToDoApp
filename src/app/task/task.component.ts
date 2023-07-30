import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnDestroy {

  @Input() task!: Task
  @Output() onRemove = new EventEmitter<number>()
  isChecked: any;

  checkValue(event: any) {
    this.task.checked = event
    console.log(event);
  }

  removeTask() {
    this.onRemove.emit(this.task.id)
  }

  ngOnDestroy() {
  }

}
