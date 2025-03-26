import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent implements OnInit{
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  para:string = '';

  constructor(private loggingService:LoggingService, private accountsService: AccountsService) {}

  ngOnInit(): void {
      this.accountsService.statusUpdate.subscribe(
        (data:string) => this.para = data
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
/*     this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    }); */
    //this.loggingService.onstatusChanged(accountStatus);
    //console.log(`A status change occured, the new status is ${accountStatus}`);
  }
}
