import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items = [
    {
      title: 'asdas',
      description: 'asdas da sd as das da sd as da ds as d asd as d',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      title: 'asdas',
      description: 'asdas da sd as das da sd as da ds as d asd as d',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      title: 'asdas',
      description: 'asdas da sd as das da sd as da ds as d asd as d',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
