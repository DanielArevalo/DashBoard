import { Routes } from '@angular/router';
import { RecentCasesComponent } from './recent-cases/recent-cases.component';
import { HistoricalCasesComponent } from './historical-cases/historical-cases.component';


export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Casos/Actual'
    },
    {
      path: 'Actual',
      component: RecentCasesComponent,
    },
    {
      path: 'Historial',
      component: HistoricalCasesComponent,
    },
];
