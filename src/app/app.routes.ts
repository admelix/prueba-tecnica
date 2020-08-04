import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tabla', component: TablaComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'date', component: DatepickerComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);