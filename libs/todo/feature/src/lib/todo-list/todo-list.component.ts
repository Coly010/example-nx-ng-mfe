import { Component } from '@angular/core';

@Component({
  selector: 'nx-ng-mfe-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos = [{ todo: 'First Item', complete: false }];

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todos.push({ todo: todo.trim(), complete: false });
    }
  }

  setTodoComplete(index: number) {
    this.todos[index].complete = true;
  }
}
