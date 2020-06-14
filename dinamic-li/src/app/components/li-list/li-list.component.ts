import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-li-list',
  templateUrl: './li-list.component.html',
  styleUrls: ['./li-list.component.css']
})
export class LiListComponent implements OnInit {

  constructor(public serv:ServiceService) { }

  ngOnInit(): void {
  }

}
