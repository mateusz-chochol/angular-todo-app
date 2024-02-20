import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'Todo App';
  newTodoText = '';

  @Output() onAddTodo = new EventEmitter<string>();

  handleAddTodo = () => {
    this.onAddTodo.emit(this.newTodoText);
    this.newTodoText = '';
  };

  changeNewTodoText = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.newTodoText = target.value;
  };
}
