import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightsService } from '../../services/flights/flights.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
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
