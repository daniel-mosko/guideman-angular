import {Component, OnInit} from '@angular/core';
import {User} from "../entities/User";
import {Router} from "@angular/router";
import {Rest} from "../api/rest.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];

  users: User[] = this.usersList;

  searchBoxText: string = "";
  serverResponseError = false;

  constructor(private router: Router, private rest: Rest) {
  }

  ngOnInit(): void {
    this.rest.getUsers().subscribe({
      complete: () => this.users = this.usersList,
      error: err => this.serverResponseError = true,
      next: u => this.usersList = u
    });
  }


  onClick(user?: User) {
    if (user == null) {
      this.router.navigate(['/add-user']).then()
      console.log(user);
      return
    }
    this.router.navigate(['/edit-user', user.id]).then();
    console.log(user);
  }

  onSearchChange() {
    this.users = this.usersList.filter(u =>
      u.name.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      u.surname.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      u.login.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      u.email.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      u.birthdate.toLowerCase().includes(this.searchBoxText.toLowerCase()) ||
      u.telNumber.toLowerCase().includes(this.searchBoxText.toLowerCase())
    );
    console.log(this.users)
  }
}
