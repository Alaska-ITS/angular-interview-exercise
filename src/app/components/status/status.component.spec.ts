import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightsService } from '../../services/flights/flights.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StatusComponent } from './status.component';
import { of } from 'rxjs';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;
  let flightService: FlightsService;
  let ping;
  let flightServiceMock = {
    getHealthPing: () => of("Successful Ping, hello if you're wondering about the date and time it is 25 Sep 12:08 AM.")
  };
  beforeEach(async () => {
    flightService = jasmine.createSpyObj(['getHealthPing'])
    TestBed.overrideProvider(FlightsService, { useValue: flightServiceMock });
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService],
      declarations: [ StatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
