import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  testvariable: string;
  private test1 = new BehaviorSubject<boolean>(false);
  gettest1 = this.test1.asObservable();
  settest1(msg: boolean){
this.test1.next(msg);

  }
  constructor() { }
}
