import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SimulationService } from '../../services/simulationService';
import { FormControl } from '@angular/forms';
import { dataService } from '../../services/dataService';


@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent implements OnInit {
  
  public isDrawerOpen: boolean = false;
  
  simulationForm: FormGroup = new FormGroup({
    numSimulations: new FormControl(0),
    changeDoor: new FormControl(false)
  });

  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService,
    private dataService: dataService
  ) { }

  ngOnInit(): void {
    this.simulationForm = this.formBuilder.group({
      numSimulations: ['', Validators.required],
      changeDoor: [true, Validators.required]
    });
  }

  startSimulation(): void {

    if (this.simulationForm.invalid) {
      return;
    } 

    const numSimulations = this.simulationForm.value.numSimulations;
    const changeDoor = this.simulationForm.value.changeDoor;

    this.isDrawerOpen = true;

    this.dataService.getData(numSimulations, changeDoor);

  } 

}

