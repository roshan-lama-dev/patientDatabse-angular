import { Component } from '@angular/core';

@Component({
  template: `<div class="searchPatient mt-5">
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
      <h5>Search the Patient</h5>
      <p>Please enter the Patient Id that needs to be search</p>
    </div>

    <div class="mb-3 row">
      <label for="patientId" class="col-sm-2 col-form-label"
        >Enter the Patient ID to be searched ::</label
      >
      <div class="col-sm-10">
        <input
          id="searchID"
          type="number"
          class="form-control"
          placeholder="Enter the PatientId to be searched from the database"
        />
      </div>
      <div class="col"></div>
      <div class="col text-center text-danger">
        <p id="searchmsg"></p>
      </div>
    </div>
    <div class="col text-center">
      <button class="btn btn-danger" (click)="searchPatient()">
        Search Patient
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
      <tbody id="searchField"></tbody>
    </table>
  </div>`,
})
export class SearchPatientComponent {
  searchPatient() {}
  message: string = '';

  displayHelp() {
    this.message =
      'Please enter the patient id to be retrieved from the database and press the search button. You can remove this help message by clicking the cross button.';
  }
  closeHelp() {
    this.message = '';
  }
}
