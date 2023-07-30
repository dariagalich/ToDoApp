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
  checked = false
  id = 0

  addTask() {
    if (this.name.trim()) {
      const task: Task = {
        id: ++this.id,
        name: this.name,
        checked: this.checked
      }
      this.onAdd.emit(task)
      this.name = ''
    }
  }
}
