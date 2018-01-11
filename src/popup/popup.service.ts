import {Injectable} from "@angular/core";
import {FVPopupComponent} from "./popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FVUploadImagesComponent} from "./upload-images.component";
import {FVViewimageComponent} from "../viewimage/viewimage.component";
/**
 * Created by vu.pham on 4/20/2017.
 */

@Injectable()
export class FVPopupService {

  constructor(private modalService: NgbModal) {
  }

    showConfirm(msg: string,viewButtonNo ?:boolean): Promise<boolean>{
      const modalRef = this.modalService.open(FVPopupComponent,{backdrop:'static'});
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
    const modalRef = this.modalService.open(FVUploadImagesComponent);
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }
  showPopupViewImage(imgs: any,index:number): Promise<any>{
    const modalRef = this.modalService.open(FVViewimageComponent);
    modalRef.componentInstance.imgs = imgs;
    modalRef.componentInstance.index = index;
    console.log('Xem thu modalRef',modalRef)
    return modalRef.result;
  }
}
