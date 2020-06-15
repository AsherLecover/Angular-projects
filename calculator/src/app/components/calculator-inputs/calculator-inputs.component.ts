import { Component, OnInit, Query } from '@angular/core';
import { log } from 'util';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-calculator-inputs',
  templateUrl: './calculator-inputs.component.html',
  styleUrls: ['./calculator-inputs.component.css']
})
export class CalculatorInputsComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public serv: ServiceService) { }

  myThing: string = '';
  num: string = '';
  result: string = '';
  resultToBePush = '';

  onClickMe(value:string){
    if(value == 'AC'){
      this.num = '';
    }
    if(value != '=' && value != 'AC'){
      this.num += value;
    }
      if(value == '='){
        this.result = eval(this.num);
        console.log(this.num);
        this.resultToBePush = this.num;
        this.num = this.result;
        this.serv.arrOfHistory.push(this.resultToBePush + ' = ' + this.result);
      }
      // if(value == 'H'){
      //   this.myHistoryFun()
      // }
    
  }
  myHistoryFun():void{
    for (let i of this.serv.arrOfHistory) {
      this.serv.arr.push(i)
      
    }
    


  }

  
  

}
