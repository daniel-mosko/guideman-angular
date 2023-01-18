import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "../entities/Location";
import {Rest} from "../api/rest.service";

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  location: Location = new Location("", "", "", 0);

  constructor(private route: ActivatedRoute, private rest: Rest) {
  }

  submitted = false;
  deleted = false;

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.rest.getLocationById(id).subscribe(u => this.location = u);
    }
  }

  onSubmit() {
    this.rest.saveLocation(this.location);
    this.submitted = true;
  }

  onDelete() {
    this.rest.deleteLocation(this.location.id);
    this.deleted = true
  }
}
