import { EventEmitter, inject, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor() { }
  loggingService = inject(LoggingService);

  statusUpdate = new EventEmitter<string>();
  

  addAccount(name:string, status:string){
    this.accounts.push({name, status});
    this.loggingService.onstatusChanged(status);
  }

  updateStatus(index:number, newStatus:string){
    this.accounts[index].status = newStatus;
    this.loggingService.onstatusChanged(newStatus);
  }
}
