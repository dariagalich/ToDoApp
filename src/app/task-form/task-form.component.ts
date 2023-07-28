import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>()

  name = ''

  addTask(){
    if (this.name.trim()){
      const task: Task = {
        name: this.name
      }
      this.onAdd.emit(task)
      this.name = ''
    }
  }
}
