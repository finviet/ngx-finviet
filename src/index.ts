import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {ToasterModule, ToasterService} from "angular2-toaster";
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { InputComponent } from './input/input.component';
import { CurrencyInput } from './input/currency-input.component';
import { PopupComponent } from './popup/popup.component';
import { UploadImagesComponent } from './popup/upload-images.component';
import { PopupService } from './popup/popup.service';
import { TreeComponent } from './tree/tree.component';
/*import { FileDropDirective } from './upload/file-drop.directive';
import { UploadComponent } from './upload/upload.component';*/
import { WaitingService } from './waiting/waiting.service';
import { WaitingComponent } from './waiting/waiting.component';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert.component';
import {FileService} from "./file.service";

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './viewimage/viewimage.component';
export * from './input/input.component';
export * from './input/currency-input.component';
export * from './popup/popup.component';
export * from './popup/upload-images.component';
export * from './popup/popup.service';
export * from './tree/tree.component';
/*export * from './upload/file-drop.directive';
export * from './upload/upload.component';*/
export * from './waiting/waiting.service';
export * from './waiting/waiting.component';
export * from './alert.service';
export * from './alert.component';
export * from "./file.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ToasterModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    ViewimageComponent,
    InputComponent,
    CurrencyInput,
    PopupComponent,
    UploadImagesComponent,
    TreeComponent,
/*    FileDropDirective,*/
/*    UploadComponent,*/
    WaitingComponent,
    AlertComponent
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    ViewimageComponent,
    InputComponent,
    CurrencyInput,
    PopupComponent,
    UploadImagesComponent,
    TreeComponent,
/*    FileDropDirective,*/
/*    UploadComponent,*/
    WaitingComponent,
    AlertComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [
        PopupService,
        AlertService,
        WaitingService,
        PopupService,
        SampleService,
        ToasterService,
        FileService
      ]
    };
  }
}
