import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SimulationResult } from '../../models/simulation-result.model';
import { dataService } from '../../services/dataService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-simulation-results',
  templateUrl: './simulation-results.component.html',
  styleUrls: ['./simulation-results.component.css']
})
export class SimulationResultsComponent {
  @Input() simulationResults: SimulationResult = { total: 0, winCount: 0 };
  
  public isDrawerOpen: boolean = false;

  constructor(
    public dataService: dataService,
    private location: Location
  ) { }

    ngOnInit(): void {
      console.log(this.dataService.getTotal(), this.dataService.getWinCount());
    }

    goBack(): void {
      this.location.go('/');
      location.reload();
    }

}

