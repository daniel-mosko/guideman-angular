import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  menuItem: string | undefined;

  constructor(private router: Router) {
  }

  changeRoute(url: string) {
    this.router.navigate([url]).then()
  }
}
