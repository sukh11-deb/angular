import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public _UserdataService:UserdataService) { }
incidentlist = [];
  ngOnInit(): void {

    this._UserdataService.gettest1.subscribe(msg =>{
//msg ? this.incidentlist.push('form validation successful'):this.incidentlist.push('form validation faild');

console.log(msg);

    })

  }

}
