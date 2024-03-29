import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor(
    // private housingService:HousingService
  ) {
    // this.housingLocationList =
    //   this.housingService.getAllHousingLocations();
    // this.filteredLocationList = this.housingLocationList;

    this.housingService.getAllHousingLocations().then(
      (housingLocationList:HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList =housingLocationList;
      }
    )
  }

  filterResults(text:string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
