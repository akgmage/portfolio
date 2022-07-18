import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items = [
    {
      entityName: 'Company X',
      title: 'Pathfinding Visualizer',
      description:
        'Created a visualization tool for visualizing different pathfinding algorithms like (A*, Dijkstras, BFS, DFS) to find shortest paths between nodes in a graph.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      imageUrl: '../../assets/pathfindv.png',
    },
    {
      entityName: 'Company X',
      title: 'Sorting Visualizer',
      description:
        'Created a visualization tool for visualizing different sorting algorithms like Bubble sort, Insertion sort, Selection sort, Merge sort, Quick sort and Heap sort.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      imageUrl: '../../assets/sortingvis.png',
    },
    {
      entityName: 'Company X',
      title: 'asdas',
      description: 'asdas da sd as das da sd as da ds as d asd as d',
      technologies: ['HTML', 'CSS', 'Javascript'],
      imageUrl: '../../assets/pathfindv.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
