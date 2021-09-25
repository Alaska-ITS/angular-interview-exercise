import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Flight } from '../../../models/flight';
import { FlightDetails } from '../../../models/flight-details';

import { FilterFormComponent } from './filter-form.component';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;
  let button: ElementRef;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    component.origin = "SEA";
    component.destination = "LAX";
    component.fromDate = "2021-07-25";
    component.toDate = "2021-07-25";
    component.nonStopOnly = false;
    de = fixture.debugElement;
    button = de.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    component.getFlightsHandler();
    spyOn(component.getFlights, 'emit');
    button.nativeElement.click();
    expect(component.getFlights.emit).toHaveBeenCalled();
  });
});
