import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Lucas',
        lastName: 'Walbruni',
        age: 29,
      },
      {
        firstName: 'Emanuella',
        lastName: 'Cacau',
        age: 29,
      },
      {
        firstName: 'Enzo',
        lastName: 'Walbruni',
        age: 6,
      },
      {
        firstName: 'Duda',
        lastName: 'Walbruni',
        age: 2,
      },
    ];

    return of(peopleArray);
  }
}
