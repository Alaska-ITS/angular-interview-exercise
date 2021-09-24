import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Flight } from '../../../../models/flight';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() flight: Flight;
}
