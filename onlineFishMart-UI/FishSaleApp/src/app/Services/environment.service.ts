import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export let environmentData = {
  production: false,
  name: '',
  appName: '',
  api: { // API Endpoints
    epmsApi:  '',
  },
  links: { // external links based on env
    educationLink: '',
    searchAddress: '',
    verifyAddress: '',
    verifyEmail: '',
    verifyPhone: '',
    training2URL: '',
    p2Link: '',
    chartAuditEstimateHistoryUrl: '',
    preDetUrl: '',
    logUrl: ''
  },
  paths: {
    uploadPath: '',
  }
};
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService   {
 static hostenvironment: string;
 static environment: any;
  constructor(private http: HttpClient) {
  }
}
