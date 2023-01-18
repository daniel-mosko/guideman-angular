import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "../entities/Location";
import {Rest} from "../api/rest.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];

  constructor(private router: Router, private rest: Rest) {
  }

  locations: Location[] = this.locationList;

  searchBoxText: string = "";
  serverResponseError = false;

  ngOnInit(): void {
    this.rest.getLocations().subscribe({
      complete: () => this.locations = this.locationList,
      error: err => this.serverResponseError = true,
      next: u => this.locationList = u
    });
  }

  onClick(location?: Location) {
    if (location == null) {
      this.router.navigate(['/add-location']).then()
      console.log(location);
      return
    }
    this.router.navigate(['/edit-location', location.id]).then();
    console.log(location);
  }

  onSearchChange() {
    this.locations = this.locationList.filter(l =>
      l.country.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      l.city.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      l.street.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      l.streetNumber.toString() == this.searchBoxText);
    console.log(this.locations);
  }
}
