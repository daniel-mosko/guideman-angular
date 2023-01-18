import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entities/User";
import {Location} from "../entities/Location";
import {Tour} from "../entities/Tour";
import {data} from "autoprefixer";

@Injectable({
  providedIn: 'root'
})
export class Rest {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  getUserById(id: number) {
    return this.http.get<User>('http://localhost:8080/users/' + id);
  }

  saveUser(user: User) {
    return this.http.post("http://localhost:8080/users", user).subscribe();
  }

  deleteUser(id: number | undefined) {
    if (id != undefined) {
      return this.http.delete("http://localhost:8080/users/" + id).subscribe();
    }
    return console.log("err");
  }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>('http://localhost:8080/locations');
  }

  getLocationById(id: number) {
    return this.http.get<Location>('http://localhost:8080/locations/' + id);
  }

  saveLocation(location: Location) {
    return this.http.post("http://localhost:8080/locations", location).subscribe();
  }

  deleteLocation(id: number | undefined) {
    if (id != undefined) {
      return this.http.delete("http://localhost:8080/locations/" + id).subscribe();
    }
    return console.log("err");
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/tours');
  }

  getTourById(id: number) {
    return this.http.get<Tour>('http://localhost:8080/tours/' + id)
  }

  saveTour(tour: Tour) {
    return this.http.post("http://localhost:8080/tours", tour).subscribe();
  }

  deleteTour(id: number | undefined) {
    if (id != undefined) {
      return this.http.delete("http://localhost:8080/tours/" + id).subscribe();
    }
    return console.log("err");
  }
}
