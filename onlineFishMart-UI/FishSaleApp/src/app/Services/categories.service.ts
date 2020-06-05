import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/Car';
import { Categories } from '../interfaces/mock-categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCarsSmall(): Car[] {
    return Categories;
  }
}
