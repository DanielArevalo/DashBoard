import { Routes } from '@angular/router';
import { LesJudComponent } from './les-jud/les-jud.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Les/Jurisprudencia'
    },
    {
      path: 'Jurisprudencia',
      component: LesJudComponent,
    },
    {

    },
];
