import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Rest} from "../api/rest.service";
import {Tour} from "../entities/Tour";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tourList: Tour[] = [];

  constructor(private router: Router, private rest: Rest) {
  }

  tours: Tour[] = [];
  searchBoxText: string = "";
  serverResponseError = false;

  ngOnInit(): void {
    this.rest.getTours().subscribe({
      complete: () => this.tours = this.tourList,
      error: err => this.serverResponseError = true,
      next: u => this.tourList = u
    });
  }

  onClick(tour?: Tour) {
    if (tour == null) {
      this.router.navigate(['/add-tour']).then()
      console.log(tour);
      return
    }
    this.router.navigate(['/edit-tour', tour.id]).then();
    console.log(tour);
  }

  onSearchChange() {
    this.tours = this.tourList.filter(t =>
      t.title.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      t.bio.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      t.guideMan.name.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      t.guideMan.surname.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      t.location.country.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      t.location.city.toLowerCase().includes(this.searchBoxText.toLowerCase())
    )
    console.log(this.tours)
  }
}
