import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = '3fe78f10d5af4b27899d5cbada1375ce';

  constructor( private http:HttpClient) { }

  getjuegos():Observable<any>{
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}`);
  }
  getJuegosDetalles(gameId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/games/${gameId}?key=${this.apiKey}`);
  }
}
