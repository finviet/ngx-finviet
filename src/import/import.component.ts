import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FVFileImportComponent} from "./upload/file-import.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'fv-import',
  templateUrl: 'import.component.html',
  styleUrls: ['import.component.css']
})
export class FVImportComponent implements OnInit {
  @Output() onImport = new EventEmitter();
  constructor(private modalService:NgbModal) {
  }
  ngOnInit() {
  }
  showBoxImport(){
    var _this = this;
    const modalRef = this.modalService.open(FVFileImportComponent);
    modalRef.result.then(result=>{
      if(result!=null){
        _this.onImport.emit(result);
      }
    })
  }
}
