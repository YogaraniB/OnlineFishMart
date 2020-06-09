import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(private http: HttpClient) { }

  public post(url: string, data?: any, optional?: any): Observable<any> {
    return this.http.post(EnvironmentService.environment.api.epmsApi + url, data, optional);
  }
  public get(url: string, optional?: any): Observable<any> {
    return this.http.get(EnvironmentService.environment.api.epmsApi + url, optional);
  }
  public put(url: string, data?: any): Observable<any> {
    return this.http.put(EnvironmentService.environment.api.epmsApi + url, data);
  }
  public delete(url: string, optional?: any): Observable<any> {
    return this.http.delete(EnvironmentService.environment.api.epmsApi  + url, optional);
  }
}
