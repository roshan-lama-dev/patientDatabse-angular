import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddPatientComponent } from './addPatient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BadURLComponent } from './badurl.component';
import { DeletePatientComponent } from './deletePatient.component';
import { DisplayPatientComponent } from './displayPatient.component';
import { EmergencyPatientComponent } from './emergencyPatient.component';
import { SearchPatientComponent } from './searchPatient.component';
import { AddFormComponent } from './addForm.component';
import { IntroComponent } from './intro.component';
const myAppRoutes: Routes = [
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'displayPatient', component: DisplayPatientComponent },
  { path: 'deletePatient', component: DeletePatientComponent },
  { path: 'searchPatient', component: SearchPatientComponent },
  { path: 'emergencyPatient', component: EmergencyPatientComponent },
  { path: 'appComponent', component: AppComponent },
  { path: 'introComponent', component: IntroComponent },
  { path: 'addFormComponent', component: AddFormComponent },
  { path: '', redirectTo: '/introComponent', pathMatch: 'full' },
  { path: '**', component: BadURLComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    AddPatientComponent,
    BadURLComponent,
    DeletePatientComponent,
    DisplayPatientComponent,
    EmergencyPatientComponent,
    SearchPatientComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot(myAppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
