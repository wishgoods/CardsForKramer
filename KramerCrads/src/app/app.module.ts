import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from 'src/components/cards/cards.component';
import { MainPageComponent } from 'src/components/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
