export class patientDetails {
  patientId: number;
  patientFirstName: string;
  patientLastName: string;
  patientDob: number;
  gender: string;
  primaryInsurance: string;
  address: string;
  patientContact: number;
  patientNextofkin: string;
  patientEmergency: boolean;

  constructor(
    pId: number,
    pFirstName: string,
    pLastName: string,
    pDOB: number,
    pgender: string,
    pInsurance: string,
    pAddress: string,
    pContact: number,
    pNextofKin: string,
    pEmergency: boolean
  ) {
    this.patientId = pId;
    this.patientFirstName = pFirstName;
    this.patientLastName = pLastName;
    this.patientDob = pDOB;
    this.gender = pgender;
    this.primaryInsurance = pInsurance;
    this.address = pAddress;
    this.patientEmergency = pEmergency;
    this.patientContact = pContact;
    this.patientNextofkin = pNextofKin;
  }
}
