import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulationResult } from '../models/simulation-result.model';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  
  private apiUrl = 'http://localhost:5002/api/Simulation';

  constructor(private http: HttpClient) { }

   runSimulation(numSimulations:number, changeDoor:boolean): Observable<SimulationResult> {
      return this.http.post<SimulationResult>(`${this.apiUrl}/calculate`, {
        numberOfSimulations: numSimulations,
        changeDoor: changeDoor
    })
} 
  
}
