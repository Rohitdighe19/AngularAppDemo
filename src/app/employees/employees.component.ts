import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  searchValue!:string;

  
  term: any;
  

  constructor(private employeeData : EmployeeService) { 
    employeeData.getEmployeeData().subscribe((data)=>{
      console.warn("data",data);
      this.employees = data;
    }); 
  }

  ngOnInit(): void {
 
  }

  getEmployeeData(data:any){
  
  this.employeeData.saveEmployeeDetails(data).subscribe((result) =>{
    console.warn(data);
  } );
  }
}
