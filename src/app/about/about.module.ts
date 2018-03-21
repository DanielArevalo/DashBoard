import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './about.routes';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutServiceComponent } from './about-service/about-service.component';
import { AboutMakeComponent } from './about-make/about-make.component';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
  AboutUsComponent,
  AboutServiceComponent,
  AboutMakeComponent
  ]
})

export class AboutModule { }
