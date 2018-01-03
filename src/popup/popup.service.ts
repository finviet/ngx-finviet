import {Injectable} from "@angular/core";
import {PopupComponent} from "./popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UploadImagesComponent} from "./upload-images.component";
import {ViewimageComponent} from "../viewimage/viewimage.component";
/**
 * Created by vu.pham on 4/20/2017.
 */

@Injectable()
export class PopupService {

  constructor(private modalService: NgbModal) {
  }

    showConfirm(msg: string,viewButtonNo ?:boolean): Promise<boolean>{
      const modalRef = this.modalService.open(PopupComponent,{backdrop:'static'});
    modalRef.componentInstance.msg = msg;
      if(viewButtonNo == undefined){
        modalRef.componentInstance.viewButtonNo = true;
        modalRef.componentInstance.title = 'Xác nhận';
        modalRef.componentInstance.close = 'Yes';
      }else {
        if(viewButtonNo == false){
          modalRef.componentInstance.viewButtonNo = false;
          modalRef.componentInstance.title = 'Thông báo';
          modalRef.componentInstance.close = 'Close';
        }
      }
    return modalRef.result;
  }


  showUpload(msg: string): Promise<boolean>{
    const modalRef = this.modalService.open(UploadImagesComponent);
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }
  showPopupViewImage(imgs: any,index:number): Promise<any>{
    const modalRef = this.modalService.open(ViewimageComponent);
    modalRef.componentInstance.imgs = imgs;
    modalRef.componentInstance.index = index;
    console.log('Xem thu modalRef',modalRef)
    return modalRef.result;
  }
}
