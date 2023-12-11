import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsultsGeneratorComponent } from './insults-generator.component';

describe('InsultsGeneratorComponent', () => {
  let component: InsultsGeneratorComponent;
  let fixture: ComponentFixture<InsultsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsultsGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsultsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
