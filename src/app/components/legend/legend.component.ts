import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
})
export class LegendComponent {
  needsChecked($event: Event) {
    throw new Error('Method not implemented.');
  }
}
