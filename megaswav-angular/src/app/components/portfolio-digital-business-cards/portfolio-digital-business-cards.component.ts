import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-portfolio-digital-business-cards',
  templateUrl: './portfolio-digital-business-cards.component.html',
  styleUrls: ['./portfolio-digital-business-cards.component.css'],
  providers: [ProjectService]
})
export class PortfolioDigitalBusinessCardsComponent implements OnInit {
  public projects: Project[] = [];
  public url:string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProject().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
