import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit {

  constructor(public serv:ServiceService) { }

  ngOnInit(): void {}


 


}
