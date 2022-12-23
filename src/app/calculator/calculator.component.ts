import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string = "0"; 
  calculator(NewValue:any) {
    if(this.value==="0") this.value = "" ; 
    this.value += NewValue;
  }

  // this function willl clear the display

  DeleteMe() {
      this.value =  "0";
  }


  // this function will show our result

  Answere() {
      let a = this.value ;
      let b = eval(a);
      this.value = b;
      console.log(this.value);
  }

}
