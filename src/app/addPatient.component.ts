import { Component } from '@angular/core';
import { patientDetails } from './patientDetails';

@Component({
  template: ` <div class="container">
    <div class="wrapper">
      <div class="button">
        <div class="row text-center my-5">
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
        <div class="row text-center my-5">
          <h3>Please go to the appropriate section to perform the task</h3>
        </div>
      </div>

      <!-- input field -->
      <div class="inputform">
        <form action="">
          <div class="inputField">
            <h5 class="text-center mt-5">Add New Patient Form</h5>
            <p class="text-center">
              Please use the form below to add the information of the new
              Patient
            </p>
            <div class="mb-3 row">
              <label for="patientId" class="col-sm-2 col-form-label"
                >Patient Id ::</label
              >
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="patientId"
                  required
                  placeholder="Enter the patient ID"
                />
              </div>
              <div class="col">
                <p id="pIdmessage"></p>
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
              <label for="address" class="col-sm-2 col-form-label"
                >Address</label
              >
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
              <button
                type="button"
                class="btn btn-primary"
                (click)="addToDatabase()"
              >
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

      <div class="displayPatient my-5">
        <h5 class="text-center mt-2">
          Display the Patient List from the database
        </h5>
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
      </div>

      <!-- Delete Field -->
      <div class="deleteField mt-5">
        <div class="row text-center mt-5">
          <h5>Delete the patient infromation from the database</h5>
          <p>
            Please enter the patient id to be deleted and press the delete
            button
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
      </div>

      <!-- Search Field -->
      <div class="searchPatient mt-5">
        <div class="text text-center">
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
      </div>

      <!-- Dispaly Emergency Field -->
      <div class="emergencyDisplay mt-5">
        <div class="text text-center">
          <h5>Dispplay the Emergency Patient</h5>
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
      </div>
    </div>
  </div>`,
})
export class AddPatientComponent {
  patientDetails_Records: Array<patientDetails>;

  constructor() {
    this.patientDetails_Records = new Array<patientDetails>();
  }

  ngOnInit() {
    this.patientDetails_Records = new Array<patientDetails>();
  }
  message: string = '';
  sucessMsg: string = '';
  pIdmessage: string = '';
  pcontact: string = '';
  pAddress: string = '';
  insurance: string = '';
  pFistNamemessage: string = '';
  pLastName: string = '';
  pDob: string = '';
  gender: string = '';

  // display Help message
  displayHelp() {
    this.message =
      'Please use the form to add patient details to the database. You can add, delete, search the patient data';
  }

  closeHelp() {
    this.message = '';
  }

  // function to add the patient record into the database
  addToDatabase(): void {
    let emergencyField = <HTMLTableElement>(
      document.getElementById('emergencyField')
    );
    let searchField = <HTMLTableElement>document.getElementById('searchField');
    let message = <HTMLTextAreaElement>document.getElementById('message');
    let pIdmessage = <HTMLTextAreaElement>document.getElementById('pIdmessage');
    let pFistNamemessage = <HTMLTextAreaElement>(
      document.getElementById('pFistNamemessage')
    );
    let insurance = <HTMLTextAreaElement>document.getElementById('insurance');
    let gender = <HTMLTextAreaElement>document.getElementById('gender');
    let pLastname = <HTMLTextAreaElement>document.getElementById('pLastName');
    let pDob = <HTMLTextAreaElement>document.getElementById('pDob');
    let paddress = <HTMLTextAreaElement>document.getElementById('pAddress');
    let pcontact = <HTMLTextAreaElement>document.getElementById('pcontact');
    let deleteMsg = <HTMLTextAreaElement>document.getElementById('deleteMsg');
    let sucessMsg = <HTMLTextAreaElement>document.getElementById('sucessMsg');
    let searchmsg = <HTMLTextAreaElement>document.getElementById('searchmsg');
    let emergencyChecked = <HTMLInputElement>(
      document.getElementById('emergency')
    );

    let pId: number = Number(
      (<HTMLInputElement>document.getElementById('patientId')).value
    );

    if (isNaN(pId)) {
      pIdmessage.innerHTML = 'Patient ID must be a number';
      return;
    } else if (pId.toString.length == 0) {
      pIdmessage.innerHTML = 'Patient ID must be entered';
      return;
    }

    if (this.patientDetails_Records.length > 0) {
      this.patientDetails_Records.map((item, index) => {
        if (pId === item.patientId) {
          pIdmessage.innerHTML = 'Please Enter new Patient ID';
          throw 'Unique ID required';
        } else {
          pIdmessage.innerHTML = '';
        }
      });
    }

    let pFirstName: string = String(
      (<HTMLInputElement>document.getElementById('patientFirstName')).value
    );
    pFistNamemessage.innerHTML = '';
    if (pFirstName.length == 0) {
      pFistNamemessage.innerHTML = 'Please enter the Patient First Name';
      return;
    }
    let pLastName: string = String(
      (<HTMLInputElement>document.getElementById('patientLastName')).value
    );
    pLastname.innerHTML = '';
    if (pLastName.length == 0) {
      pLastname.innerHTML = 'Please enter the Patient Last Name';
      return;
    }
    let pDOB: number = Number(
      (<HTMLInputElement>document.getElementById('patientDOB')).value
    );

    if (pDOB) {
      pDob.innerHTML = 'Please enter the Patient DOB';
      // return;
    }

    gender.innerHTML = '';
    let pgender: string = String(
      (<HTMLInputElement>document.getElementById('genderSelect')).value
    );

    if (pgender === '') {
      gender.innerHTML = 'Please select Gender';
      return;
    }
    let pInsurance: string = String(
      (<HTMLInputElement>document.getElementById('insuranceSelect')).value
    );

    if (pInsurance === '') {
      insurance.innerHTML = 'Please select from one of the insurance';
      return;
    }
    let pAddress: string = String(
      (<HTMLInputElement>document.getElementById('address')).value
    );
    if (pAddress.length == 0) {
      paddress.innerHTML = "Please enter the Patient's Address";
      return;
    }
    let pContact: number = Number(
      (<HTMLInputElement>document.getElementById('contactnum')).value
    );
    if (pContact.toString.length == 0) {
      pcontact.innerHTML = 'Please enter the Patient Contact Number';
      return;
    }
    let pNextofKin: string = String(
      (<HTMLInputElement>document.getElementById('nextOfKin')).value
    );

    if (pNextofKin.length == 0) {
      pNextofKin = 'null';
    }

    let pEmergency: boolean = Boolean(
      (<HTMLInputElement>document.getElementById('emergency')).value
    );

    if (emergencyChecked.checked == true) {
      pEmergency = true;
    } else {
      false;
    }

    let pDetails: patientDetails = {
      patientId: pId,
      patientFirstName: pFirstName,
      patientLastName: pLastName,
      patientDob: pDOB,
      gender: pgender,
      primaryInsurance: pInsurance,
      address: pAddress,
      patientContact: pContact,
      patientNextofkin: pNextofKin,
      patientEmergency: pEmergency,
    };

    if (this.patientDetails_Records.push(pDetails)) {
      sucessMsg.innerHTML = 'Data Added Successfully';

      console.log(this.patientDetails_Records);
    }
  }

  // function to display the patient record from the database
  displayData(): void {
    let displayTable = <HTMLTableElement>document.getElementById('tabletoshow');
    if (this.patientDetails_Records.length < 0) {
      // message?.innerHTML = "Please enter the patient deatils first";
    }
    displayTable.innerHTML = '';

    this.patientDetails_Records.map((item, index) => {
      displayTable.innerHTML += `
      <tr>
      <th scope="row">${item.patientId}</th>
      <td>${item.patientFirstName}</td>
      <td>${item.patientLastName}</td>
      <td>${item.patientDob}</td>
      <td>${item.gender}</td>
      <td>${item.primaryInsurance}</td>
      <td>${item.address}</td>
      <td>${item.patientContact}</td>
      <td>${item.patientNextofkin}</td>
      <td>${item.patientEmergency}</td>
    </tr>
      `;
    });
  }

  // function to delete the patient record as per the patientID given by the users
  deletePatient(): void {
    let deleteMsg = <HTMLTextAreaElement>document.getElementById('deleteMsg');
    let deleteID: number = Number(
      (<HTMLInputElement>document.getElementById('deleteID')).value
    );

    for (let i = 0; i < this.patientDetails_Records.length; i++) {
      let pIDDelete = this.patientDetails_Records[i].patientId;
      console.log(pIDDelete);
      if (pIDDelete === deleteID) {
        if (
          window.confirm('Do you want to remove the patient from the Database')
        ) {
          // str.innerHTML = "The ID you entered doesnot exist";
          this.patientDetails_Records.splice(i, 1);
          deleteMsg.innerHTML =
            'The patient with the id ' + `${deleteID}` + ' is deleted';
        }
        // console.log("Delete possible");
      } else {
        deleteMsg.innerHTML = "The Id doesn't exist";
        // str = "THe ";
      }
    }

    this.displayData();
    console.log(deleteID);
  }
  // fucntion to search the patient details as per the id provided by the users
  searchPatient(): void {
    let searchmsg = <HTMLTextAreaElement>document.getElementById('searchmsg');
    let searchField = <HTMLTableElement>document.getElementById('searchField');
    let searchID: number = Number(
      (<HTMLInputElement>document.getElementById('searchID')).value
    );
    searchmsg.innerHTML = '';
    console.log(searchID);

    if (this.patientDetails_Records.length < 0) {
      searchmsg.innerHTML =
        'The patient details with the id ' + `${searchID}` + " doesn't exist";
    }
    this.patientDetails_Records.map((item, index) => {
      if (searchID === item.patientId) {
        searchField.innerHTML = '';

        searchField.innerHTML += `
        <tr>
        <th scope="row">${item.patientId}</th>
        <td>${item.patientFirstName}</td>
        <td>${item.patientLastName}</td>
        <td>${item.patientDob}</td>
        <td>${item.gender}</td>
        <td>${item.primaryInsurance}</td>
        <td>${item.address}</td>
        <td>${item.patientContact}</td>
        <td>${item.patientNextofkin}</td>
        <td>${item.patientEmergency}</td>
      </tr>
        `;
      } else if (searchID !== item.patientId) {
        searchmsg.innerHTML =
          'The patient details with the id' + `${searchID}` + " doesn't exist";
      }
    });
    this.displayData();
  }

  // function to display the emergency patient from the database
  displayEmergency(): void {
    let emergencyField = <HTMLTableElement>(
      document.getElementById('emergencyField')
    );
    this.patientDetails_Records.map((item) => {
      if (item.patientEmergency === true) {
        // emergencyField.innerHTML = "";

        emergencyField.innerHTML += `
        <tr>
        <th scope="row">${item.patientId}</th>
        <td>${item.patientFirstName}</td>
        <td>${item.patientLastName}</td>
        <td>${item.patientDob}</td>
        <td>${item.gender}</td>
        <td>${item.primaryInsurance}</td>
        <td>${item.address}</td>
        <td>${item.patientContact}</td>
        <td>${item.patientNextofkin}</td>
        <td>${item.patientEmergency}</td>
      </tr>
        `;
      }
    });
    this.displayData();
  }
}
