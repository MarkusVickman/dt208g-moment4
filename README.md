# Moment4, dt208g - Programmering i TypeScript

Det här repot innehåller koden för webbplatsen [ramschema-angular](https://ramschema-angular.netlify.app/). Webbplatsen är lösningen på uppgiften moment 4 i kursen Programmering i TypeScript.

## Krav för att uppgiften skall anses som godkänd:

* Du har skapat en Angular-applikation som hämtar data från en webbtjänst/JSON-fil och presenterar den på skärmen.
* Du har skapat en (eller flera) service som sköter kommunikationen för att hämta data från JSON-filen, genom att använd HttpClient.
* Du har skapat en tabell som innehåller data för kurskod, kursnamn och progression.
* Det går att sortera data på kurskod, kursnamn och progression.
* Det går att filtrera/söka data genom att ange en textfras.
* Användargränssnittet uppdateras automatiskt vid klick för sortering samt ändring av sökfras.
* Uppgiften är publicerad till en publikt tillgänglig webbhost och går att testköra.
* Källkoden är publicerad med hjälp av Git, tillsammans med en beskrivande README.md-fil som beskriver hur din applikation är konstuerad och fungerar.

## Nedan besvarar jag hur jag har mött kraven för uppgiften:

* Angular har använts för att skapa webbplatsen.
* Servicen getschedule skapades och i den hämtades data som observables med hjälp av modulen HttpClient som hämtar JSON-data genom HTTP-protokollet. Metoden getSchedule() anropas för att data ska hämtas efter interfacet "ram".
* Komponenten scheduletable innehåller en klassen ngOnInit för att prenumerara på data från metoden getSchedule(). Datan lagras i 2 variabler för att ena ska förbli ostörd vid filtrering eller sortering.
* Ett tableelement finns i html-filen till komponenten scheduletable i den byggs tabellen upp med hjälp av datan.
* Med hjälp av .sort() går tabellen att sortera efter namn, kod eller progression. Vid ett andra klick på samma knapp går det att sortera i omvänd ordning. Detta gör med hjälp av if-satser och boolean-variabler.
* .filter() används för att filtrera ramschemat efter inputvärdet. För varje ny input görs en ny matchning/filtrering från den ursprungliga schemat och sparar in det i variablen för filrerat schema. Då uppdaterar också tabellen direkt då det är den filtrerade arrayen som skrivs ut på skärmen.
* Om inget sökresultat ges skrivs ett felmeddelande ut på skärmen med *ngIf="".
* Webbplatsen är publicerad på netlify, se länk längst upp i denna readme.
* Källkoden är kommenterad och publicerad här på netlify.
* CSS- och HTML-koden är validerad.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
