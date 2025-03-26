import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
/*   @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>(); */

  constructor() {}
  //loggingService = inject(LoggingService);
  accountsService = inject(AccountsService);

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdate.emit(status);
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    //this.loggingService.onstatusChanged(status);
    //console.log(`A status change occured, the new status is ${status}`);
  }
}
