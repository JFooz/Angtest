import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-seance',
  templateUrl: './liste-seance.component.html',
  styleUrls: ['./liste-seance.component.css']
})
export class ListeSeanceComponent implements OnInit {

listSeance = [
  { titre: 'seance1', date: Date.now(), note: 34 },

  {
    titre: 'seance2',
    date: Date.now(),
    note: 38
  },

  {
    titre: 'seance3',
    date: Date.now(),
    note: 23
  },

  {
    titre: 'seance4',
    date: Date.now(),
    note: 33
  }
];

  constructor() { }

  ngOnInit() {
  }

}
