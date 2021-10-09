import { Component, OnInit } from '@angular/core';
import { RosangelaborgesWalletService } from '../rosangelaborges-wallet.service';

@Component({
  selector: 'app-rosangelaborges-wallet',
  templateUrl: './rosangelaborges-wallet.component.html',
  styleUrls: ['./rosangelaborges-wallet.component.css']
})
export class RosangelaborgesWalletComponent implements OnInit {

  constructor(public wallet: RosangelaborgesWalletService) { }

  ngOnInit() {
  }

}