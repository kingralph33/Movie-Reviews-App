import { Component, OnInit } from '@angular/core';

export interface Rate {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html',
  styleUrls: ['./movies-update.component.scss'],
  standalone: false
})
export class MoviesUpdateComponent implements OnInit {
  topic = 'TBD';
  ratings: Rate[] = [
    { value: 1, viewValue: '1 - HORRIBLE!' },
    { value: 2, viewValue: '2 - NOT GOOD!' },
    { value: 3, viewValue: '3 - JUST OKAY!' },
    { value: 4, viewValue: '4 - GOOD!' },
    { value: 5, viewValue: '5 - GREAT!' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
