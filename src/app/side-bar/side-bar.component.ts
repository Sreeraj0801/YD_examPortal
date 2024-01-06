import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
	questions:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  coding_questions:number[] = [1,2,3]
  colorString:string = 'st'

  handleButtonClick(){
    alert("clicked")
  }
  
}
