import { Component } from '@angular/core';

export class Task {
  check?: boolean
  name!: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ToDoApp';

  tasks: Task[] = [
    {check: true, name: 'Название 1', id: 1},
    {check: false, name: 'Название 2', id: 2},
    {check: true, name: 'Название 3', id: 3}
  ]

  updateTasks(task: Task){
    this.tasks.unshift(task)
    console.log('Task ', task)
  }

  removeTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id)
  }

  saveTasks(){
    localStorage.setItem('check', JSON.stringify(this.tasks))
  }
}
