import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { WeatherforecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // weatherForecastService = inject(WeatherforecastService)
  // climas: any[] = [];

  // constructor(){
  //   this.weatherForecastService.obtenerClima().subscribe(datos => {
  //     this.climas = datos;
  //   })
 // }

  title = 'angular-front';
}
