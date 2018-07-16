import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

// app bootstrap module & component
import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
