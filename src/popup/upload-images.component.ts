import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'npp-upload-images',
  templateUrl: 'upload-images.component.html',
  styleUrls: ['upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  msg: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  upload() {
    this.activeModal.close(true);
  }
}
