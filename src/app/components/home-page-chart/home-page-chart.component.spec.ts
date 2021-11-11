import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageChartComponent } from './home-page-chart.component';

describe('HomePageChartComponent', () => {
  let component: HomePageChartComponent;
  let fixture: ComponentFixture<HomePageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
