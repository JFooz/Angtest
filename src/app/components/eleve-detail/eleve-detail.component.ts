import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleve-detail',
  templateUrl: './eleve-detail.component.html',
  styleUrls: ['./eleve-detail.component.css']
})
export class EleveDetailComponent implements OnInit {

  isLoaded = false;
  eleve: any;
  estAfficher = false;
  userId: string;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(+this.userId).subscribe(res => {
      this.eleve = res;
      this.isLoaded = true;
      console.log(this.eleve);
    }, err => {
      console.log(err);
    });
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
