import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './les.routes';
import { LesJudComponent } from './les-jud/les-jud.component';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    LesJudComponent
  ]
})

export class LesModule { }
