import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CardComponentModule } from '@nx-ng-mfe/shared-ui';

@NgModule({
  imports: [CommonModule, CardComponentModule],
  declarations: [ShellComponent, TodoListComponent, TodoItemComponent],
  exports: [ShellComponent],
})
export class TodoFeatureModule {}
