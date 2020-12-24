import { Component, Input, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  server = "nodejs";
  replacedword;
  valuefromservice;
  addWord(newword: string)
  {
    this.replacedword = newword;
  } 
  constructor(public _UserdataService:UserdataService) { 
this.valuefromservice = this._UserdataService.testvariable?this._UserdataService.testvariable:'value is not set';

   }

  ngOnInit(): void {
  }

}
