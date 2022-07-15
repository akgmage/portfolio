import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  constructor() {}

  ngOnInit(): void {}
}
