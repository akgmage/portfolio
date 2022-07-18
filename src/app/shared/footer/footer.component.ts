import { Component, OnInit } from '@angular/core';
import {
  faAngular,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date: Date = new Date();
  faAngular = faAngular;
  faJs = faJsSquare;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  constructor() {}

  ngOnInit(): void {}
}
