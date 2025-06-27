    // src/app/app.component.ts
    import { Component } from '@angular/core';
    import { TaskListComponent } from './components/task-list/task-list.component'; 

    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [TaskListComponent],
      templateUrl: './app.component.html',
    })
    export class AppComponent {
      title = 'task-manager';
    }
