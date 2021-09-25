import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FlightsService } from '../../services/flights/flights.service';
import { FlightsComponent } from './flights.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {HttpClientModule} from '@angular/common/http';
import { Type } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ FlightsComponent, FilterFormComponent ],
      providers: [ FlightsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', fakeAsync(() => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get<FlightsService>(FlightsService as Type<FlightsService>)
    let stub = spyOn(service, 'getFlights').and.callFake((): any => {
      return Rx.of({
        flight: []
      }).pipe(delay(100));
    });
    component.getFlightsHandler();
    expect(component.flights$).toBeDefined;
  }))
});
