import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RosangelaborgesCurrencyComponent } from './rosangelaborges-currency/rosangelaborges-currency.component';
import { RosangelaborgesWalletComponent } from './rosangelaborges-wallet/rosangelaborges-wallet.component';
import { RouterModule } from '@angular/router';
import { RosangelaborgesWalletService } from './rosangelaborges-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     RouterModule.forRoot([
      { path: 'currency', component: RosangelaborgesCurrencyComponent  },
      { path: 'wallet', component: RosangelaborgesWalletComponent  },
    ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, RosangelaborgesCurrencyComponent, RosangelaborgesWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RosangelaborgesWalletService],
})
export class AppModule { }
