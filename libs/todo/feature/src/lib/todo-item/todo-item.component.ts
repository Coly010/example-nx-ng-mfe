import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-ng-mfe-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo = '';
  @Output() toggled = new EventEmitter<boolean>();

  toggle(checked: boolean) {
    this.toggled.emit(checked);
  }
}
