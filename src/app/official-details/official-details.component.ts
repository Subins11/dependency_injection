import { Component } from '@angular/core';
import { EmployeDetailsService } from '../employe-details.service';

@Component({
  selector: 'app-official-details',
  templateUrl: './official-details.component.html',
  styleUrls: ['./official-details.component.scss']
})
export class OfficialDetailsComponent {

  officialDetails: any;

  constructor(private employeeService: EmployeDetailsService) {}

  ngOnInit() {
    this.officialDetails = this.employeeService.getOfficialDetails();
  }

}
