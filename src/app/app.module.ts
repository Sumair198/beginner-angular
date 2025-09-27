import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { UsersModule } from './users/users.module';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomStyleDirective } from './custom-style.directive';
import {HttpClientModule} from '@angular/common/http';
import { ChildTestingComponent } from './child-testing/child-testing.component';
import { CountrycodePipe } from './countrycode.pipe';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ChildComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    CustomStyleDirective,
    ChildTestingComponent,
    CountrycodePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
