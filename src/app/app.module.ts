import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Interceptors
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BulbHttpInterceptor } from './services/httpInterceptor';
import { BulbHttpClient } from './services/bulbHttpClient';
import { AuthGuard } from './services/auth.guard';
import { ApiService } from './services/api.service';
import { StorageService } from './services/storage.service';
import { IssueListModule } from './views/issueList/issueList.module';
import { ItemListModule } from './components/itemList/itemList.module';
import { ItemListService } from './components/itemList/itemList.service';
import { IssueDetailsModule } from './views/issueDetails/issueDetails.module';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BulbHttpInterceptor, multi: true },
];

// Application wide providers
const APP_PROVIDERS = [
  httpInterceptorProviders,
  BulbHttpClient,
  AuthGuard,
  ApiService,
  StorageService,

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ItemListModule,
    IssueListModule,
    IssueDetailsModule,
  ],
  providers: [
    APP_PROVIDERS,
    ItemListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
