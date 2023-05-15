import "rxjs/add/operator/map";
import {Task} from "app/tasks/task.model";
import {EventEmitter, Injectable} from "@angular/core/src/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TaskService {

     onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {

    }

    getTasks():Observable<Task> {
        return this.http.get<Task>('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post('/api/tasks/save', task)
            // .map(response => response.json());
    }

    addTask(task: Observable<Task>) {
        return this.http.post<Task>('/api/tasks/save', task)
            //.map(response => response.json());
    }

}
