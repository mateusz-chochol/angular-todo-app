import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../types/TodoItem';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input({ required: true }) todo: TodoItem | null = null;
  @Output() onDeleteTodo = new EventEmitter<number>();
  @Output() onToggleTodo = new EventEmitter<number>();

  onDeleteClick = () => {
    if (this.todo) {
      this.onDeleteTodo.emit(this.todo.id);
    }
  };

  onToggle = () => {
    if (this.todo) {
      this.onToggleTodo.emit(this.todo.id);
    }
  };
}
