import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlConfig } from './url.config';
import { HttpUtilsService } from './http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private http: HttpClient,
    private httpUtilsService: HttpUtilsService) { }

  userSignup(data):Observable<any> {
    return this.http.post(`${UrlConfig.totalUrl.UserSignUps}` , data );
  }
}
