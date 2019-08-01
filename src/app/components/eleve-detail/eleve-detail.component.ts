import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleve-detail',
  templateUrl: './eleve-detail.component.html',
  styleUrls: ['./eleve-detail.component.css']
})
export class EleveDetailComponent implements OnInit {

  estAfficher = false;
  eleve = {
    prenom: 'Faouzi',
    nom: 'Yekhlef',
    imgProfil: '/../assets/images/812a33c1631476b1a8726c7988827093.jpg',
    citation : "mes couilles sur ton front"
  };

  constructor() { }

  ngOnInit() {
  }

  afficherDetail() {
    
    /**
     * if (this.estAfficher) {
        this.estAfficher = false;
      } else (!this.estAfficher) {
        this.estAfficher = true;
      }
     */
    this.estAfficher = this.estAfficher ? false : true;
  }

}
