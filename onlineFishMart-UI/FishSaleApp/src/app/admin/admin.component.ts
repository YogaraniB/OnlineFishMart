import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';
import { Car } from '../interfaces/Car';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayDialog: boolean;
  car: any;
  selectedCar: Car;
  newCar: boolean;
  // cars: Car[];
  cols: any[];
  cat: Car[];

  constructor(private catService: CategoriesService) { }

  ngOnInit(): void {

    this.cat = this.catService.getCarsSmall();

    this.cols = [
        { field: 'category', header: 'Category' },
        { field: 'subcategory', header: 'Sub Category' },
        { field: 'gweight', header: 'Gross Weight' },
        { field: 'nweight', header: 'Net Weight' },
        { field: 'price', header: 'Price' },
        { field: 'description', header: 'Description' },

    ];
    console.log(this.cols);

  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
}


save() {
    let cat = [...this.cat];
    if (this.newCar)
        cat.push(this.car);
    else
        cat[this.cat.indexOf(this.selectedCar)] = this.car;

    this.cat = cat;
    this.car = null;
    this.displayDialog = false;
}

delete() {
    let index = this.cat.indexOf(this.selectedCar);
    this.cat = this.cat.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newCar = false;
   // this.car = this.cloneCar(event.data);
    this.displayDialog = true;
}

// cloneCar(c: Car): Car {
//     let car = {};
//     for (let prop in c) {
//         car[prop] = c[prop];
//     }
//     return car;
// }

}
