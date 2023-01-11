import { NormalCarsComponent } from './normal-cars/normal-cars.component';
import { AuthGuardService } from './services/guard/authGuard.service';
import { CarsComponent } from './cars/cars.component';
import { SporComponent } from './spor/spor.component';
import { SuvComponent } from './suv/suv.component';
import { SedanComponent } from './sedan/sedan.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'giris', component: LoginComponent },
  { path: 'kayit', component: RegisterComponent },
  { path: 'sedan', component: SedanComponent, canActivate:[AuthGuardService] },
  { path: 'suv', component: SuvComponent, canActivate:[AuthGuardService] },
  { path: 'spor', component: SporComponent, canActivate:[AuthGuardService] },
  { path: 'admin-cars', component: CarsComponent, canActivate: [AuthGuardService] },
  { path: 'araclar', component: NormalCarsComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
