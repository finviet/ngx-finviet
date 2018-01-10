import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'fv-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css']
})
export class FVPopupComponent implements OnInit {
  msg: any;
  viewButtonNo: boolean;
  title : any;
  close : any;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }
  update() {
    this.activeModal.close(true);
  }
}
