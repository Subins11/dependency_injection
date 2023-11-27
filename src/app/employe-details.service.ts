import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeDetailsService {
personalDetails = {
    firstName: 'Subin',
    lastName: 'S',
    age: 26,
    email: 'subin.s@example.com',
  };

officialDetails = {
    employeeId: '00001',
    department: 'IT',
    position: 'Software Developer',
  };

  getPersonalDetails() {
    return this.personalDetails;
  }

  getOfficialDetails() {
    return this.officialDetails;
  }
  constructor() { }
}
