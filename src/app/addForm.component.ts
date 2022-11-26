import { Component } from '@angular/core';

@Component({
  template: `
    <div class="inputform">
      <form (ngSubmit)="addToDatabase()" ) action="">
        <div class="inputField">
          <h5 class="text-center mt-5">Add New Patient Form</h5>
          <p class="text-center">
            Please use the form below to add the information of the new Patient
          </p>
          <div class="mb-3 row">
            <label for="patientId" class="col-sm-2 col-form-label"
              >Patient Id ::</label
            >
            <div class="col-sm-10">
              <input
                #idFields
                [(ngModel)]="idField"
                type="number"
                class="form-control"
                id="patientId"
                required
                placeholder="Enter the patient ID"
              />
            </div>
            <div class="col">
              <p id="pIdmessage">{{ idField }}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="patientId" class="col-sm-2 col-form-label"
              >First Name ::</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="patientFirstName"
                required
                placeholder="Enter the patient first name"
              />
            </div>
            <div class="col">
              <p id="pFistNamemessage"></p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="patientLastName" class="col-sm-2 col-form-label"
              >Last Name ::</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="patientLastName"
                required
                placeholder="Enter the patient last name"
              />
            </div>

            <div class="row">
              <p id="pLastName"></p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="patientId" class="col-sm-2 col-form-label"
              >DOB ::</label
            >
            <div class="col-sm-10">
              <input
                required
                type="date"
                class="form-control"
                id="patientDOB"
                placeholder="Enter the patient DOB"
              />
            </div>
            <div class="row">
              <p id="pDob"></p>
            </div>
          </div>

          <div class="mb-3 row">
            <select
              id="genderSelect"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unspecified">Unspecified</option>
            </select>
            <div class="col">
              <p id="gender"></p>
            </div>
          </div>
          <div class="mb-3 row">
            <select
              id="insuranceSelect"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected value="">Select Primary Insurance</option>
              <option value="Medicare">Medicare</option>
              <option value="Private Health Insurance">
                Private Health Insurance
              </option>
            </select>
            <div class="row">
              <p id="insurance"></p>
            </div>
          </div>

          <div class="mb-3 row">
            <label for="address" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter the patient Address"
              />
            </div>
            <div class="col">
              <p id="pAddress"></p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="contactnum" class="col-sm-2 col-form-label"
              >Contact Number</label
            >
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                id="contactnum"
                placeholder="Enter the patient conatct number"
              />
            </div>
            <div class="col text-danger">
              <p id="pcontact"></p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="nextkin" class="col-sm-2 col-form-label"
              >Next of Kin</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="nextOfKin"
                placeholder="Enter the patient next of kin"
              />
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="emergency"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Emergency
            </label>
          </div>

          <div class="col text-center">
            <button type="submit" class="btn btn-primary">
              Add New Patient
            </button>
          </div>

          <div class="col text-center text-danger">
            <p id="sucessMsg"></p>
          </div>
        </div>

        <hr />
      </form>
    </div>
  `,
})
export class AddFormComponent {
  idField: string = '';
  addToDatabase() {
    // let pIdmessage = idFields.value;
    // console.log(pIdmessage);
  }
}
