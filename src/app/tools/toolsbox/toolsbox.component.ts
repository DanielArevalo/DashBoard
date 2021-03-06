import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-toolsbox',
  templateUrl: './toolsbox.component.html',
  styleUrls: ['./toolsbox.component.css']
})
export class ToolsboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mostrar();
  }
  private mostrar () : void {
    $(".accordion-titulo").click(function() {

      var contenido = $(this).next(".accordion-content");

      if (contenido.css("display") == "none") { //open
          $(".accordion-titulo").removeClass("open");
          $(".accordion-content").slideUp(250);
          contenido.slideDown(250);
          $(this).addClass("open");
      } else { //close
          contenido.slideUp(250);
          $(this).removeClass("open");
      }

  });
}
}
