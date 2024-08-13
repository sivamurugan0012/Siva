import { Component,OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects

  constructor(projects:ProjectDataService) { 
    this.projects = projects.getProjects()
  }

  ngOnInit(): void {
  }
}
