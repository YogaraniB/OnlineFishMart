import { Component } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FishSaleApp';
  date1: Date;
}
