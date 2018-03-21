import { NgModule } from '@angular/core';
import { ROUTES } from './tools.routes';
import { RouterModule } from '@angular/router';
import { ToolsboxComponent } from './toolsbox/toolsbox.component';


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ToolsboxComponent
  ]
})

export class ToolsModule { }
