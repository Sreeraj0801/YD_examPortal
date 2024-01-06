import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
import { QuestionConsoleComponent } from './question-console/question-console.component';
import { HeaderComponent } from './header/header.component';
import { QuestionButtonComponent } from './question-button/question-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    QuestionConsoleComponent,
    HeaderComponent,
    QuestionButtonComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbModule
  ],
  providers: [NgbAccordionModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
