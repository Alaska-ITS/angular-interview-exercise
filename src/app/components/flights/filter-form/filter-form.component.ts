import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterFormComponent {
  @Input() origin: string;
  @Output() originChange = new EventEmitter<string>();
  @Input() destination: string;
  @Output() destinationChange = new EventEmitter<string>();
  @Input() fromDate: string;
  @Output() fromDateChange = new EventEmitter<string>();
  @Input() toDate: string;
  @Output() toDateChange = new EventEmitter<string>();
  @Input() nonStopOnly: boolean;
  @Output() nonStopOnlyChange = new EventEmitter<boolean>();
  @Output() getFlights = new EventEmitter();

  getFlightsHandler() {
    this.getFlights.emit();
  }
}
