import { Component } from '@angular/core';
import { EmployeDetailsService } from '../employe-details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  personalDetails: any;

  constructor(private employeeService: EmployeDetailsService) {}

  ngOnInit() {
    this.personalDetails = this.employeeService.getPersonalDetails();
  }
}
