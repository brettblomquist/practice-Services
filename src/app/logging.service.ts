import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  onstatusChanged(status:string){
    console.log(`A status change occured, the new status is ${status}`);
  }
}
