import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-seance',
  templateUrl: './form-seance.component.html',
  styleUrls: ['./form-seance.component.css']
})
export class FormSeanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.titre);
    console.log(form.value.note);
    console.log(form.value.date);
  }

}
