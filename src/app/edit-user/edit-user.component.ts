import {Component, OnInit} from '@angular/core';
import {User} from "../entities/User";
import {ActivatedRoute, Router} from '@angular/router';
import {Rest} from "../api/rest.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User("", "", "", "", "", "", "");

  constructor(private route: ActivatedRoute, private router: Router, private rest: Rest) {
  }

  newUser = false;

  submitted = false;
  deleted = false;

  ngOnInit(): void {
    // this.user = new User('Jakub', 'Nizo', 'jn@bugster.com', '1234', '2022-02-01', "jniznik", "password",1);
    let id: number = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.rest.getUserById(id).subscribe(u => this.user = u);
      return;
    }
    this.newUser = true;
  }

  onSubmit() {
    console.log(this.user);
    console.log(this.rest.saveUser(this.user));
    this.submitted = true;
  }

  onDelete() {
    this.rest.deleteUser(this.user.id);
    this.deleted = true;
  }

  handlePasswordChange(event: any) {
    if (!event.target.value.isEmpty) {
      console.log(event.target.value)
      this.user.password = event.target.value
    }
  }
}
