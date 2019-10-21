import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeCORS';
  person;
  data;

  private REST_API_SERVER = "http://localhost:8082/FindLogsBackEnd/api/environment";
  //private REST_API_SERVER = "http://localhost:8082/projetoposgraduacao/api/environment";

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  fetchDataFromServer(){
    console.log('Testando....');
    this.person = this.http
    .get(this.REST_API_SERVER)
    .subscribe(data =>
      {
        this.data = data;
      }
    )
  }
}
