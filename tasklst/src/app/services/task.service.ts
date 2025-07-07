    import { Injectable } from '@angular/core';
    import { Task } from '../models/task.model';
    import { User } from '../models/user.model';

    @Injectable({
        providedIn: 'root'
    })
    export class TaskService {
        private tasks: Task[] = [];
        private users: User[] = [
            { id: 'user1', name: 'Alice', email: 'alice@example.com' },
            { id: 'user2', name: 'Bob', email: 'bob@example.com' },
        ];

        constructor() {
            this.tasks = [
                { id: 'task1', title: 'Сделать отчет', dueDate: new Date('2024-12-31'), completed: false, assignedUser: this.users[0] },
                { id: 'task2', title: 'Проверить код', dueDate: new Date('2024-12-25'), completed: true, assignedUser: this.users[1] },
            ];
        }

        getTasks(): Task[] {
            return this.tasks;
        }

        getUsers(): User[] {
            return this.users;
        }

        addTask(task: Task): void {
            this.tasks.push(task);
        }

        updateTask(updatedTask: Task): void {
            this.tasks = this.tasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            );
        }

        deleteTask(taskId: string): void {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }

        filterTasksByDate(date: Date): Task[] {
            return this.tasks.filter(task =>
                task.dueDate.toDateString() === date.toDateString()
            );
        }

        filterTasksByUser(user: User): Task[] {
            return this.tasks.filter(task =>
                task.assignedUser?.id === user.id
            );
        }
    }
