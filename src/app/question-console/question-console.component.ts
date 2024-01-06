import { Component } from '@angular/core';

@Component({
  selector: 'app-question-console',
  templateUrl: './question-console.component.html',
  styleUrls: ['./question-console.component.css']
})
export class QuestionConsoleComponent {
options:number[] = [1,2,3,4]
page:number = 10
}
