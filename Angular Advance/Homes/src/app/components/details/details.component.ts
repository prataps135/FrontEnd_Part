import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { HousingService } from 'src/app/services/housing.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  housingLocationId = -1;


  constructor() {
    this.housingLocationId =
      Number(this.route.snapshot.params['id']);

    this.housingService.getHousingLocationById(this.housingLocationId).then(
      (housingLocation) =>{
        this.housingLocation = housingLocation;
      }
    );
  }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
