import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeatureComponent } from './pages/home/feature/feature.component';
import { IndustryComponent } from './pages/home/industry/industry.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'home', component:HomeComponent
    },
    {
        path:'feature', component:FeatureComponent
    },
    {
        path:'industry', component:IndustryComponent
    }
];
