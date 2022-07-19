import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items = [
    {
      entityName:
        'A connected care platform to Simplify Healthcare Delivery for Women',
      title: 'GenVCare',
      description:
        'Ready recokner for structured screening programs for cervical and breast cancer. Quick and easy user experience for screening and reporting cases. Structuring a call-recall platform for clinical surveillance',
      technologies: ['Flutter', 'Dart', 'ASP.NET CORE'],
      imageUrl: 'assets/threephone.png',
    },
    {
      entityName:
        'An educative tool to visualize different pathfinding algorithms',
      title: 'Pathfinding Visualizer',
      description:
        'Created a visualization tool for visualizing different pathfinding algorithms like (A*, Dijkstras, BFS, DFS) to find shortest paths between nodes in a graph.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      imageUrl: 'assets/pathvismac.png',
    },
    {
      entityName: 'An educative tool to visualize different sorting algorithms',
      title: 'Sorting Visualizer',
      description:
        'Created a visualization tool for visualizing different sorting algorithms like Bubble sort, Insertion sort, Selection sort, Merge sort, Quick sort and Heap sort.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      imageUrl: 'assets/sortvismac.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
