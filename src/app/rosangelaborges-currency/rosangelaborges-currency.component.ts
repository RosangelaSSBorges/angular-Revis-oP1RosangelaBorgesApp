import { Component, OnInit } from '@angular/core';
import { RosangelaborgesWalletService } from '../rosangelaborges-wallet.service';

@Component({
  selector: 'app-rosangelaborges-currency',
  templateUrl: './rosangelaborges-currency.component.html',
  styleUrls: ['./rosangelaborges-currency.component.css']
})
export class RosangelaborgesCurrencyComponent implements OnInit {

  constructor(public wallet: RosangelaborgesWalletService) { }

  ngOnInit() {
  }

}