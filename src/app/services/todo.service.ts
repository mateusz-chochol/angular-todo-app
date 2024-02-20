import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../../types/TodoItem';
import { Observable, map } from 'rxjs';
import { TodoDto } from '../../types/TodoDto';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private fetchUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  fetchTodos = (): Observable<TodoItem[]> => {
    return this.http.get<TodoDto[]>(this.fetchUrl).pipe(
      map((todos) =>
        todos.map((todo) => ({
          id: todo.id,
          text: todo.title,
          isCompleted: false,
        }))
      )
    );
  };
}
