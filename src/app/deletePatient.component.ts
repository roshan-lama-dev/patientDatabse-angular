import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  template: ` <div class="deleteField mt-5">
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
    <div class="row text-center mt-5">
      <h5>Delete the patient infromation from the database</h5>
      <p>
        Please enter the patient id to be deleted and press the delete button.
      </p>
    </div>

    <div class="mb-3 row">
      <label for="patientId" class="col-sm-2 col-form-label"
        >Enter the Patient ID to be deleted ::</label
      >
      <div class="col-sm-10">
        <input
          id="deleteID"
          type="number"
          class="form-control"
          placeholder="Enter the PatientId to be removed from the database"
        />
      </div>
      <div class="col"></div>
      <div class="col">
        <p id="deleteMsg"></p>
      </div>
    </div>
    <div class="col text-center">
      <button class="btn btn-danger" (click)="deletePatient()">
        Delete Patient
      </button>
    </div>
  </div>`,
})
export class DeletePatientComponent {
  message: string = '';
  deletePatient() {}
  displayHelp() {
    this.message =
      'Please enter the Patient Id to be delete in the text field and enter the delete button. Click the cross button to remove the help message.';
  }

  closeHelp() {
    this.message = '';
  }
}
