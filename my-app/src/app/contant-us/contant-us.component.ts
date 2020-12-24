import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { __importDefault } from 'tslib';
import { Output, EventEmitter } from '@angular/core';
import { UserdataService } from '../services/userdata.service';


interface user{
  firstname: string,
  lastname: string
}

@Component({
  selector: 'app-contant-us',
  templateUrl: './contant-us.component.html',
  styleUrls: ['./contant-us.component.css']
})


export class ContantUsComponent implements OnInit {
@Input() serverName: string;
@Output() replaceWord = new EventEmitter<string>();

addNewWord(value: string){
  this.replaceWord.emit(value);
  this._UserdataService.testvariable=value;
}

//serverName = "Hellooo"; 
//name = new FormControl('');

 userdetails: user; 
contactusForm: FormGroup;
  constructor(

    private _FormBuilder:FormBuilder,
    public _UserdataService:UserdataService

  ) { }

  ngOnInit(): void {

    this.contactusForm = this._FormBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required]

    })
  this.contactusForm.get('firstname').valueChanges.subscribe((val)=>{
    console.log("FN:",val);
  })

  this.contactusForm.valueChanges.subscribe((val)=>{
    console.log("FULL",val);
  })
  }

  submituser(){
  if(this.contactusForm.valid){
    this.userdetails = this.contactusForm.value;
    this._UserdataService.settest1(true);
  }
  else
  {
    console.log("form is not valid");
    this._UserdataService.settest1(false);

  }

  }

  
    
}
