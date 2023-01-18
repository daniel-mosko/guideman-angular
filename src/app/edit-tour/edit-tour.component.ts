import {Component, OnInit} from '@angular/core';
import {Location} from "../entities/Location";
import {ActivatedRoute} from "@angular/router";
import {Rest} from "../api/rest.service";
import {Tour} from "../entities/Tour";
import {User} from "../entities/User";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {

  tour: Tour = new Tour("", "", 0, new Location("", "", "", 0), new User("", "", "", "", "", "", ""));
  users: User[] = []
  locations: Location[] = []

  constructor(private route: ActivatedRoute, private rest: Rest) {
  }

  selectedGuideman: User | any;
  selectedLocation: Location | any;
  submitted = false;
  deleted = false;

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.rest.getTourById(id).subscribe(u => this.tour = u);
    }
    this.rest.getUsers().subscribe(u => this.users = u);
    this.rest.getLocations().subscribe(u => this.locations = u);
  }

  onSubmit() {
    this.tour.guideMan = this.selectedGuideman;
    this.tour.location = this.selectedLocation;
    console.log(this.tour)
    console.log(this.selectedLocation)
    this.rest.saveTour(this.tour);
    this.submitted = true;
  }

  onDelete() {
    this.rest.deleteTour(this.tour.id);
    this.deleted = true
  }

  selectGuideMan(user: User | undefined) {
    if (user === undefined) {
      this.selectedGuideman = undefined;
      return
    }
    this.selectedGuideman = user;
  }

  selectLocation(location: Location | undefined) {
    if (location === undefined) {
      this.selectedLocation = undefined;
      return
    }
    this.selectedLocation = location;
  }
}
