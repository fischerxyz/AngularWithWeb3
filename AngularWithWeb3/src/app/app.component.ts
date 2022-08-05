import { Component } from '@angular/core';
import { ContractService } from './contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWithWeb3';

  constructor(public contractService: ContractService){}

  ngOnInit(): void {
    this.contractService.connectToWeb3Account();
  }
}
