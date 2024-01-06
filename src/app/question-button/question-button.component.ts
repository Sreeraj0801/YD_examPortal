import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css'],
})
export class QuestionButtonComponent {
  @Input() buttonText: number = 1; 
  @Input() color: string = 'hello'; 
  @Input() questionString: string = ''; 
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>(); 

  onClick(): void {
    this.buttonClicked.emit();
  }
}
