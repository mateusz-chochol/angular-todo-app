import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItem } from '../types/TodoItem';
import { TodoService } from './services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoading: boolean = false;
  todos: TodoItem[] = [];

  constructor(private fetchService: TodoService) {}

  ngOnInit() {
    this.isLoading = true;
    this.fetchService.fetchTodos().subscribe((todos) => {
      this.todos = todos.slice(0, 5);
      this.isLoading = false;
    });
  }

  onAddTodo = (text: string) => {
    if (!text) return;

    this.todos = [
      ...this.todos,
      {
        id: this.todos[this.todos.length - 1].id + 1,
        text,
        isCompleted: false,
      },
    ];
  };

  onDeleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  onToggleTodo = (id: number) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  };
}
