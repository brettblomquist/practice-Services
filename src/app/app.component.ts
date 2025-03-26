import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountComponent, NewAccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
 accounts:{name:string, status:string}[] = []
 accountsService = inject(AccountsService);

  constructor() {}

  ngOnInit(): void {
      this.accounts = this.accountsService.accounts;
  }

/*   onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  } */

}
