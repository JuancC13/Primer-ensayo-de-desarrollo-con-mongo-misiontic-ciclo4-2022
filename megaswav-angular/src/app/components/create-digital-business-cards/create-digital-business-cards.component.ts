import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create-digital-business-cards',
  templateUrl: './create-digital-business-cards.component.html',
  styleUrls: ['./create-digital-business-cards.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateDigitalBusinessCardsComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string | undefined;
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2021,'');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          

          //subir imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project_id, [], this.filesToUpload,'image').then((result:any) => {
              //Guardar datos
              this.status="success";
            console.log(result);
            form.reset();
          })
          
        }else{
          this.status="failed";
        }
        console.log(response);
      },error => {
        console.error(<any>error);
      }
      
      
    );
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
