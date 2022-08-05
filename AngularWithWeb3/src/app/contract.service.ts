import { Injectable } from '@angular/core';
import Web3 from "web3";

declare let window:any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3: any;
  accounts: Array<String> = [];

  async connectToWeb3Account(){
    await this.connectWeb3();
    await this.loadBlockchainData();
  }

  async connectWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable;
    } 
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } 
    else {
        window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3;
    const accounts = await web3.eth.requestAccounts();

    if(accounts != null){
        this.accounts = accounts;
    }
  }
}
