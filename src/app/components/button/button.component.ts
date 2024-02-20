import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) text: string = '';
  @Output() onClick = new EventEmitter<never>();

  onButtonClick = () => {
    this.onClick.emit();
  };
}
