import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduletableComponent } from './scheduletable.component';

describe('ScheduletableComponent', () => {
  let component: ScheduletableComponent;
  let fixture: ComponentFixture<ScheduletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduletableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
