import { Component } from '@angular/core';

@Component({
  template: `<div class="displayPatient my-5">
    <div class="row text-center">
      <div class="col">
        <button class="btn btn-info" (click)="displayHelp()">Help</button>
      </div>
      <div class="col">
        <button class="btn btn-danger" (click)="closeHelp()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    <p class="text-center text-danger my-4">{{ message }}</p>
    <h5 class="text-center mt-2">Display the Patient List from the database</h5>
    <p class="text-center">
      Please click the display button to display the list of the patient
    </p>

    <div class="col text-center">
      <button class="btn btn-info my-5" (click)="displayData()">
        Display Patient
      </button>
    </div>
    <table class="md table">
      <thead>
        <tr>
          <th scope="col">Patient Id</th>
          <th scope="col">Patient First Name</th>
          <th scope="col">Patient Last Name</th>
          <th scope="col">DOB</th>
          <th scope="col">Gender</th>
          <th scope="col">Insurance</th>
          <th scope="col">Address</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Next of Kin</th>
          <th scope="col">Emergency</th>
        </tr>
      </thead>
      <tbody id="tabletoshow"></tbody>
    </table>
  </div>`,
})
export class DisplayPatientComponent {
  displayData() {}
  message: string = '';
  displayHelp() {
    this.message =
      'Please enter the display button to display the entire information of the patient in the database. Click the cross button to remove this help message';
  }
  closeHelp() {
    this.message = '';
  }
}
