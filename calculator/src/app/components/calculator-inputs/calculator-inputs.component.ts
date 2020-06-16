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
  constructor(private serv: ServiceService) { }

  myThing: string = '';
  num: string = '';
  result: string = '';
  resultToBePush = '';
  temp: string = ''
 

  onClickMe(value:string){
    if(value == 'AC'){
      this.num = '';
      return;
    }

      if(value == '='){
        this.result = eval(this.num);
        console.log(this.num , 'asher')
        this.resultToBePush = this.num;
        this.num = this.result;
        this.serv.arrOfHistory.push(this.resultToBePush + ' = ' + this.result);
        return
      }

      if(value == '.' || value == '*' || value == '/' || value == '+' || value == '-'){
        
        if(value != this.temp){
          this.temp = value;
          this.num += value;
          return;
        }
        return
      }
      this.num +=value
      

    
    
  }
  myHistoryFun():void{
    for (let i of this.serv.arrOfHistory) {
      this.serv.arr.push(i)
      
    }
    


  }

  
  

}
