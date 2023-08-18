import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PrimengComponent } from './primeng/primeng.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EchartsComponent } from './echarts/echarts.component';
import { BuildApkComponent } from './build-apk/build-apk.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { NvmComponent } from './nvm/nvm.component';
import { VersionDegradeComponent } from './version-degrade/version-degrade.component';
import { UploadProjectGitComponent } from './upload-project-git/upload-project-git.component';

const routes: Routes = [
  {path:'',component:CommandComponent},
  {path:'page-create',component:PageCreateComponent},
  {path:'primeng',component:PrimengComponent},
  {path:'create-component',component:CreateComponentComponent},
  {path:'echarts',component:EchartsComponent},
  {path:'build-apk',component:BuildApkComponent},
  {path:'image-zoom',component:ImageZoomComponent},
  {path:'nvm',component:NvmComponent},
  {path:'version-degrade',component:VersionDegradeComponent},
  {path:'upload-github',component:UploadProjectGitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandRoutingModule { }
