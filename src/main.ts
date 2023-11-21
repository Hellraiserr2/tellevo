import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiaGVsbHJhaXNlcnIyIiwiYSI6ImNsbnR5MjVtODA3eWIya283djB6bTZya2gifQ.pobj6tcVNShRHszZZCoeVg';


if ( !navigator.geolocation){
  alert('No disponible')
  throw new Error('navegador no soporta geolocalizacion')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
