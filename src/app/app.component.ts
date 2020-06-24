import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-essentials';
  @ViewChild('ref', { static: false },) ref: ElementRef;


  ngAfterViewInit(): void {
    console.log(this.ref);
  }
}
