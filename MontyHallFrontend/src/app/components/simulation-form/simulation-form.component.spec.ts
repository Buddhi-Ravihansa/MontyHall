import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFormComponent } from './simulation-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


describe('SimulationFormComponent', () => {
  let component: SimulationFormComponent;
  let fixture: ComponentFixture<SimulationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationFormComponent],
      imports: [
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the Monty Hall Problem title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.example-card mat-card-title');
    expect(titleElement.textContent).toContain('The Monty Hall Problem');
  });

  it('should display the Monty Hall Problem title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.example-card mat-card-subtitle');
    expect(titleElement.textContent).toContain('The Monty Hall is a brain teaser, in the form of a probability puzzle. The question is whether the chances of winning increase if the player changes the door');
  });
  
  it('should display the "Number of Simulations" input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[formControlName="numSimulations"]');
    expect(inputElement).toBeTruthy();
  });

  it('should display the "Start Simulation" button', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Start Simulation');
  });


  

});
