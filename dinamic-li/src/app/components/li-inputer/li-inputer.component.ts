import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceOptions } from 'selenium-webdriver/remote';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-li-inputer',
  templateUrl: './li-inputer.component.html',
  styleUrls: ['./li-inputer.component.css']
})
export class LiInputerComponent implements OnInit {

  constructor(public serv:ServiceService) { }

  ngOnInit(): void {}
  
  @ViewChild("myInput")myInput:ElementRef

  inputerFN(newValue:string):void{
    console.log(newValue);
    console.log(this.myInput.nativeElement.value); 
    this.serv.arr.push(newValue)
    console.log(this.serv.arr);
    
  }
  logmyinput(value:string):void{
    this.serv.arr.push(value)

  }
}

