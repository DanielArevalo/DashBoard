import { Routes } from '@angular/router';
import { ToolsboxComponent } from './toolsbox/toolsbox.component';


export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Tools/Herramientas'
    },
    {
      path: 'Herramientas',
      component: ToolsboxComponent,
    },
];
