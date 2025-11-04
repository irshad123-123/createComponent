import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { TodosComponent } from './todos/todos.component';
import { MoviesComponent } from './movies/movies.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { DeviceComponent } from './device/device.component';
import { ImagesComponent } from './images/images.component';
import { BikesComponent } from './bikes/bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    StudentsComponent,
    TodosComponent,
    MoviesComponent,
    LaptopComponent,
    MobileComponent,
    DeviceComponent,
    ImagesComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
