import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsultGeneratorComponent } from './insult-generator.component';

describe('InsultGeneratorComponent', () => {
  let component: InsultGeneratorComponent;
  let fixture: ComponentFixture<InsultGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsultGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsultGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
