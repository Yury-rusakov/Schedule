    import { Component, OnInit } from '@angular/core';
    import { TaskService } from '../../services/task.service';
    import { Task } from '../../models/task.model';
    import { User } from '../../models/user.model';
    import { FormsModule } from '@angular/forms';

    @Component({
      selector: 'app-task-form',
      standalone: true,
      imports: [FormsModule], 
      templateUrl: './task-form.component.html',
      styleUrls: ['./task-form.component.css']
    })
    export class TaskFormComponent implements OnInit {
        title: string = '';
        dueDate: Date | null = null;
        assignedUser: string | undefined;
        users: User[] = [];

        constructor(private taskService: TaskService) { }

        ngOnInit(): void {
            this.users = this.taskService.getUsers();
        }

        addTask(): void {
            if (this.title && this.dueDate) {
                const newTask: Task = {
                    id: Math.random().toString(36).substring(2, 15),
                    title: this.title,
                    dueDate: this.dueDate,
                    completed: false,
                    assignedUser: this.users.find(u => u.id === this.assignedUser)
                };
                this.taskService.addTask(newTask);
                this.title = '';
                this.dueDate = null;
                this.assignedUser = undefined;
            }
        }
    }
