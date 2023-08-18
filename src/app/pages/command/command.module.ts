import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
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

@NgModule({
  declarations: [
    CommandComponent,
    PageCreateComponent,
    CommandComponent,
    PrimengComponent,
    CreateComponentComponent,
    EchartsComponent,
    BuildApkComponent,
    ImageZoomComponent,
    NvmComponent,
    VersionDegradeComponent,
    UploadProjectGitComponent
  ],
  imports: [
    CommonModule,
    CommandRoutingModule
  ]
})
export class CommandModule { }
