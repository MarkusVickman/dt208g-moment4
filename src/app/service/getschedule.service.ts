//Service för att hämta data med Http protokollet.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ram } from '../models/ram';

@Injectable({
  providedIn: 'root'
})

//klass för att hämta data med Http protokollet.
export class GetscheduleService {
  url: string = `https://webbutveckling.miun.se/files/ramschema_ht23.json`;

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Ram[]> {
    return this.http.get<Ram[]>(this.url);
}
}
