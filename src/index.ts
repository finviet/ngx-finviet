import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {ToasterModule, ToasterService} from "angular2-toaster";
import { SampleComponent } from './sample.component';
import { FVViewimageComponent } from './viewimage/viewimage.component';
import { FVInputComponent } from './input/input.component';
import { FVCurrencyInputComponent } from './input/currency-input.component';
import { FVPopupComponent } from './popup/popup.component';
import { FVUploadImagesComponent } from './popup/upload-images.component';
import { FVPopupService } from './popup/popup.service';
import { FVTreeComponent } from './tree/tree.component';
/*import { FileDropDirective } from './upload/file-drop.directive';
import { UploadComponent } from './upload/upload.component';*/
import { FVWaitingService } from './waiting/waiting.service';
import { FVWaitingComponent } from './waiting/waiting.component';
import { FVAlertService } from './alert.service';
import { FVAlertComponent } from './alert.component';
import { FVFileService} from "./file.service";

export * from './sample.component';
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
    FVViewimageComponent,
    FVInputComponent,
    FVCurrencyInputComponent,
    FVPopupComponent,
    FVUploadImagesComponent,
    FVTreeComponent,
/*    FileDropDirective,*/
/*    UploadComponent,*/
    FVWaitingComponent,
    FVAlertComponent
  ],
  exports: [
    SampleComponent,
    FVViewimageComponent,
    FVInputComponent,
    FVCurrencyInputComponent,
    FVPopupComponent,
    FVUploadImagesComponent,
    FVTreeComponent,
/*    FileDropDirective,*/
/*    UploadComponent,*/
    FVWaitingComponent,
    FVAlertComponent
  ]
})
export class FVCommonMoDule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FVCommonMoDule,
      providers: [
        FVPopupService,
        FVAlertService,
        FVWaitingService,
        FVPopupService,
        ToasterService,
        FVFileService
      ]
    };
  }
}
