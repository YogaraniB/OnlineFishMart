import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoryComponent,
    MainpageComponent,
    SubCategoryComponent,
    LoginComponent,
    CustomerdetailComponent,
    NavComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    ReactiveFormsModule,DialogModule,
    HttpClientModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
