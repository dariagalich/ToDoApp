import { Component } from '@angular/core';

export class Task {
  id?: number
  check?: boolean
  name!: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ToDoApp';

  tasks: Task[] = [
    {id: 1, check: true, name: 'Название 1'},
    {id: 2, check: false, name: 'Название 2'},
    {id: 3, check: true, name: 'Название 3'}
  ]

  updateTasks(task: Task){
    this.tasks.unshift(task)
    console.log('Task ', task)
  }

  removeTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id)
  }

  saveTasks(){
    let numTask = 0
    for (let t of this.tasks) {
      numTask++
      localStorage.setItem('task '+ numTask.toString(),JSON.stringify(t))
      console.log(localStorage.getItem('task '+ numTask.toString()))
    }
  }
}
