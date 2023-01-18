import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LocationsComponent} from './locations/locations.component';
import {ToursComponent} from './tours/tours.component';
import {HomepageComponent} from './homepage/homepage.component';
import {EditLocationComponent} from './edit-location/edit-location.component';
import {HttpClientModule} from "@angular/common/http";
import {EditTourComponent} from './edit-tour/edit-tour.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-user', component: EditUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'add-location', component: EditLocationComponent},
  {path: 'edit-location/:id', component: EditLocationComponent},
  {path: 'add-tour', component: EditTourComponent},
  {path: 'edit-tour/:id', component: EditTourComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'tours', component: ToursComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    SidebarComponent,
    LocationsComponent,
    ToursComponent,
    HomepageComponent,
    EditLocationComponent,
    EditTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
