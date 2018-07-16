import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

// app modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// bootstrap component
import { AppComponent } from './core/containers/app/app.component';

// app routes
import { routes } from './app.module.routes';

@NgModule({
  imports: [
    // app shared module
    SharedModule,
    // core components
    CoreModule,
    // default browser module for Angular bootstrapping
    BrowserModule.withServerTransition({ appId: 'nest-angular-microfrontend-example' }),
    TransferHttpCacheModule,
    // set global app routes
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
