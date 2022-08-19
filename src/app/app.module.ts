import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheadComponent } from './components/mainhead/mainhead.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { ChildSupportComponent } from './components/child-support/child-support.component';
import { JoinusComponent } from './components/joinus/joinus.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheadComponent,
    HeaderComponent,
    ServiceComponent,
    ChildSupportComponent,
    JoinusComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
