import { Component, OnInit } from '@angular/core';

// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-angular-material-example',
  templateUrl: './angular-material-example.component.html',
  styleUrls: ['./angular-material-example.component.scss']
})

export class AngularMaterialExampleComponent implements OnInit {

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  // inputValue: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  // addText() {
  //   this.inputValue = "Dima";
  // }

}
