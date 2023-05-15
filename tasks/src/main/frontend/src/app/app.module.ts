import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HttpModule} from "@angular/http";
import {TaskService} from "./tasks/task.service";
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core/src/core';
//
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
