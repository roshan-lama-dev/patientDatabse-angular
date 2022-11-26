import { Component } from '@angular/core';

@Component({
  template: `<div class="emergencyDisplay mt-5">
    <div class="text text-center">
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
      <h5>Display the Emergency Patient</h5>
      <p>Please click the display button to view the emergency patient</p>
    </div>

    <div class="col text-center">
      <button class="btn btn-info" (click)="displayEmergency()">
        Display Emergency Patient
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
      <tbody id="emergencyField"></tbody>
    </table>
  </div> `,
})
export class EmergencyPatientComponent {
  displayEmergency() {}
  message: string = '';
  displayHelp() {
    this.message =
      'Please enter the display emergency patient button to dispaly the list of the emergency patient from the database. You can click the cross button to close this message.';
  }
  closeHelp() {
    this.message = '';
  }
}
