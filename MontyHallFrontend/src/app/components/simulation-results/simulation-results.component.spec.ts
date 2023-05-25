import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationResultsComponent } from './simulation-results.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

describe('SimulationResultsComponent', () => {
  let component: SimulationResultsComponent;
  let fixture: ComponentFixture<SimulationResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationResultsComponent],
      imports: [
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule
      ] }).compileComponents();
    });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Simulation Results" title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Simulation Results');
  });

  it('should display the total number of simulations', () => {
    const totalSimulations: number = 100; 
    component.dataService.getTotal = () => totalSimulations;
    fixture.detectChanges();
    const totalSimulationsElement: HTMLElement = fixture.nativeElement.querySelector('p:nth-child(2)');
    expect(totalSimulationsElement.textContent).toContain(`Total Simulations: ${totalSimulations}`);
  });
  
  it('should display the win count', () => {
    const winCount: number = 75; 
    component.dataService.getWinCount = () => winCount;
    fixture.detectChanges();
    const winCountElement: HTMLElement = fixture.nativeElement.querySelector('p:nth-child(3)');
    expect(winCountElement.textContent).toContain(`Win Count: ${winCount}`);
  });
  
});
