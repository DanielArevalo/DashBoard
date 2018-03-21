import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './cases.routes';
import { HistoricalCasesComponent } from './historical-cases/historical-cases.component';
import { RecentCasesComponent } from './recent-cases/recent-cases.component';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    HistoricalCasesComponent,
    RecentCasesComponent
  ]
})

export class CasesModule { }
