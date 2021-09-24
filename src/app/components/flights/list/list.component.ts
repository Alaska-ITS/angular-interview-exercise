import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Flight } from '../../../models/flight';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() flights: Flight[];
}
