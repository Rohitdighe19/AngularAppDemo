import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url = "http://localhost:3000/data";
// url = "https://dummy.restapiexample.com/api/v1/employees"; //we have used local server because there are too many requests on the fake api url
constructor(private http: HttpClient) {}
getEmployeeData(){
  return this.http.get(this.url);
}

saveEmployeeDetails(data:any){
  return this.http.post(this.url,data);
}

}
