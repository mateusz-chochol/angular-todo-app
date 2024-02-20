import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../types/TodoItem';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input({ required: true }) todos: TodoItem[] = [];
  @Output() onDeleteTodo = new EventEmitter<number>();
  @Output() onToggleTodo = new EventEmitter<number>();

  handleDeleteTodo = (id: number) => {
    this.onDeleteTodo.emit(id);
  };

  handleToggleTodo = (id: number) => {
    this.onToggleTodo.emit(id);
  };
}
