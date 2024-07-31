import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    { id: 1, name: 'Portifolio Website', description: 'Using Angular 16,HTML,CSS.' },
    { id: 2, name: 'TRIPLET Android Application', description: 'Using Android studio' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
