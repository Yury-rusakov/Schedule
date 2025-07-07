    import {User} from './user.model'
    export interface Task {
        id: string;
        title: string;
        description?: string;
        dueDate: Date;
        assignedUser?: User;
        completed: boolean;
    }
