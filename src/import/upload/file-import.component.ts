import {Component, OnInit, ViewEncapsulation,ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import * as XLSX from 'xlsx';
@Component({
  selector: 'fv-import-file',
  templateUrl: 'file-import.component.html',
  styleUrls: ['file-import.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FVFileImportComponent implements OnInit {
  @ViewChild("fileUpload") fileUpload: any;
  jsonData:any = [];
  constructor(private activeModal: NgbActiveModal) {
  }
  ngOnInit() {

  }
  close(){
    this.activeModal.close();
  }
  upload(){
    this.activeModal.close(this.jsonData);
  }

  fixdata(data) {
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }
  to_json(workbook) {
    var result = {};
    workbook.SheetNames.forEach(function(sheetName) {
      var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      if(roa.length > 0){
        result[sheetName] = roa;
      }
    });
    return result;
  }
  changeFile() {
    {
      var _this = this;
      var f = this.fileUpload.nativeElement.files[0];
      {
        var reader = new FileReader();
        reader.onload = function(e:any) {
          var data = e.target.result;
          var arr = _this.fixdata(data);
          var wb = XLSX.read(btoa(arr), {type: 'base64'});
          _this.jsonData = _this.to_json(wb);
          }
        };
         reader.readAsArrayBuffer(f);
      }
  }

   //  var file = this.fileUpload.nativeElement.files[0];
   // var  fileUrl  = URL.createObjectURL(file);
   //  console.log(file);
   //  let wb = XLSX.readFile(fileUrl);
   //  setTimeout(()=>{
   //    console.log(wb);
   //  },1000)

}
