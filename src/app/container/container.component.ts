import { Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent; // only accessible inside the   ngAfterContentInit - no static:true here 

  ngAfterContentInit() {
    console.log(this.employeeComponent);
    this.employeeComponent.empName = 'Jean Marc';
  }
}
