import { Injectable } from '@angular/core';
import { SimulationService } from './simulationService';

@Injectable({
  providedIn: 'root'
})
export class dataService {
  
    private total: number;
    private winCount: number;
    public isLoading: boolean = false;

    constructor(
        private simulationService: SimulationService,
    ) {
        this.total = 0;
        this.winCount = 0;
    }

    public getData(minSimulation: number, changeDoor: boolean) {
        this.isLoading = true;
        this.simulationService.runSimulation(minSimulation, changeDoor)
        .subscribe({
            next: (response) => {
                console.log(response);
                this.total = response.total;
                this.winCount = response.winCount;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                this.isLoading = false;
            }
        });

    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public getTotal(): number {
        return this.total;
    }

    public setWinCount(winCount: number): void {
        this.winCount = winCount;
    }

    public getWinCount(): number {
        return this.winCount;
    }
  
}
