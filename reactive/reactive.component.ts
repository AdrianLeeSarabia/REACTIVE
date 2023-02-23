import { Component } from '@angular/core';
import {from, of, pipe} from 'rxjs';
import { filter, map } from 'rxjs/operators';

//LIST
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers$.subscribe(value => console.log(value));

//MAP
numbers$
  .pipe(
    map(value => value * 2)
  )
  .subscribe(value => console.log(value));

const users = [
  { id: 1, name: 'Alice', age: 25},
  { id: 2, name: 'Bob', age: 30},
  { id: 3, name: 'Charlie', age: 35},
  { id: 4, name: 'Adrian Lee Sarabia', age: 20},
];
//FROM
const users$ = from(users);
users$.subscribe(user => console.log(user));

//FILTER
users$
  .pipe((
    filter(user => user.age > 30)
  ))
  .subscribe(user => console.log(user));

  //MAP AGE
  users$
  .pipe(
    map(user => user.age * 2 +" "+ user.name.toUpperCase())
  )
  .subscribe(user => console.log(user));

  numbers$
  .pipe(
    filter(value => value %2 == 0)
  )
  .subscribe(value => console.log(value));

  numbers$
  .pipe(
    filter(value => value %2 != 0)
  )
  .subscribe(value => console.log(value));
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

}

