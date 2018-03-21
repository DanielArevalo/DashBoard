import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(router.url.replace('/', '') + ' - Nysqua');
    });
  }

  ngOninit() {
  }
}
