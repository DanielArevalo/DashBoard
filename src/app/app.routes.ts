import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full',
    },
    {
        path: 'Inicio',
        loadChildren: './home/home.module#HomeModule',
    },
    {
      path: 'About',
      loadChildren: './about/about.module#AboutModule',
    },
    {
      path: 'Casos',
      loadChildren: './cases/cases.module#CasesModule',
    },
    {
      path: 'Caja',
      loadChildren: './tools/tools.module#ToolsModule',
    },
    {
      path: 'Legislacion',
      loadChildren: './les/les.module#LesModule',
    },
  ]
