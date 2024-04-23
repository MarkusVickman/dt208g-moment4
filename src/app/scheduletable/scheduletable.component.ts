import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetscheduleService } from '../service/getschedule.service';
import { Ram } from '../models/ram';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scheduletable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scheduletable.component.html',
  styleUrl: './scheduletable.component.scss'
})

//Huvud klassen för att skriva ut data på skärmen och läsa in från sök
export class ScheduletableComponent {
  schedule: Ram[] = [];
  filteredSchedule: Ram[] = [];
  searchInput: string = "";

  //Dessa variabler nedan används för att se om en sortering redan har gjorts.
  sortedCode: boolean = false;
  sortedName: boolean = false;
  sortedProgression: boolean = false;

  constructor(private GetscheduleService: GetscheduleService) { }

  //Vid start hämtas data från servicen getschedule och lagras i två array of objects. Ena förblir oförändrad för att inte förstöra data.
  ngOnInit() {
    this.GetscheduleService.getSchedule().subscribe((data) => {
      this.schedule = data;
      this.filteredSchedule = data;
    }
    );
  }

  //Metod för att söka efter kurser, vid filtrering tas ett object med om kurskod eller namn innehåller söksträngen.
  searchCourse(): void {
    this.filteredSchedule = this.schedule.filter((Ram) => (Ram.coursename.toLowerCase().includes(this.searchInput.toLowerCase()) || Ram.code.toLowerCase().includes(this.searchInput.toLowerCase()))
    );
  }

  //Sortera efter kod och även checkar ifall sortering redan skett + att den resettar för att alltid sortera i stigande ordning i första hand.
  sortByCode(): void {
    if (this.sortedCode === false) {
      this.filteredSchedule.sort((a, b) => (a.code < b.code ? -1 : 1));
      this.sortedCode = true;
      this.sortedName = false;
      this.sortedProgression = false;
    }
    else {
      this.filteredSchedule.sort((a, b) => (a.code < b.code ? 1 : -1));
      this.sortedCode = false;
      this.sortedName = false;
      this.sortedProgression = false;
    }
  }

  //Sortera efter namn och även checkar ifall sortering redan skett + att den resettar för att alltid sortera i stigande ordning i första hand.
  sortByName(): void {
    if (this.sortedName === false) {
      this.filteredSchedule.sort((a, b) => (a.coursename < b.coursename ? -1 : 1));
      this.sortedCode = false;
      this.sortedName = true;
      this.sortedProgression = false;
    }
    else {
      this.filteredSchedule.sort((a, b) => (a.coursename < b.coursename ? 1 : -1));
      this.sortedCode = false;
      this.sortedName = false;
      this.sortedProgression = false;
    }
  }

  //Sortera efter progression och även checkar ifall sortering redan skett + att den resettar för att alltid sortera i stigande ordning i första hand.
  sortByProgression(): void {
    if (this.sortedProgression === false) {
      this.filteredSchedule.sort((a, b) => (a.progression < b.progression ? -1 : 1));
      this.sortedCode = false;
      this.sortedName = false;
      this.sortedProgression = true;
    }
    else {
      this.filteredSchedule.sort((a, b) => (a.progression < b.progression ? 1 : -1));
      this.sortedCode = false;
      this.sortedName = false;
      this.sortedProgression = false;
    }
  }
}