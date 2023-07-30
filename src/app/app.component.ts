import {Component} from '@angular/core';

export class Task {
  id: number
  checked: boolean
  name!: string

  constructor() {
    this.checked = false
    this.id = 0
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  title = 'ToDoApp';

  tasks: Task[] = [
    {id: 0, checked: false, name: 'Записывайте сюда ваши задачи)'},
  ]

  updateTasks(task: Task) {
    this.tasks.unshift(task)
    console.log('Task ', task)
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id)
  }

  saveTasks() {
    let numTask = 0
    for (let t of this.tasks) {
      numTask++
      localStorage.setItem('task ' + numTask.toString(), JSON.stringify(t))
    }
  }
}
