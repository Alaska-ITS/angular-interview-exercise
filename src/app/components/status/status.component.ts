import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from 'src/app/services/flights/flights.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  healthPing$: Observable<string> = this.flightService.getHealthPing();
  constructor(private readonly flightService: FlightsService) {
  }
}
