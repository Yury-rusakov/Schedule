import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { DatePipe } from '@angular/common'; 

@Component({
    selector: 'app-task-list',
    standalone: true, 
    imports: [DatePipe],
    providers: [ TaskService ],
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
        this.tasks = this.taskService.getTasks();
        console.log(this.tasks)
    }

    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

    deleteTask(taskId: string): void {
        this.taskService.deleteTask(taskId);
        this.tasks = this.taskService.getTasks();
    }
}
