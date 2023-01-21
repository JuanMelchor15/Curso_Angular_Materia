import { WeatherComponent } from './page/weather/weather.component';
import { DataResolverService } from './shared/services/data-resolver.service';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch:'full'
  },
  {
    path: 'weather',
    loadChildren: ()=>   import('./page/weather/weather.module').then((m) => m.WeatherModule),
    component: WeatherComponent,
    resolve: {
      weatherData: DataResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
