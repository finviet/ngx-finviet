///<reference path="../../../../node_modules/@angular/http/src/headers.d.ts"/>
import {Component,Input, Output, OnInit, EventEmitter} from '@angular/core';
import {FVFileService} from "../file.service";
import {Headers} from "@angular/http";
import {FVAlertService} from "../alert.service";
import {FVWaitingService} from "../waiting/waiting.service";

export class FileHolder {
  public serverResponse: any;
  public pending: boolean = false;
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'fv-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class FVUploadComponent implements OnInit {
  get headers(): Headers {
    return this._headers;
  }

  set headers(value: Headers) {
    this._headers = value;
  }
  @Input() max: number = 100;
  @Input()  _headers: Headers;
  @Input() preview: boolean = true;
  @Input() multiple:boolean = true;
  @Input() thumbnail:boolean = false;
  @Input() idInput:string='multi';
  @Output()
  isPending: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  onFileUploadFinish: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output()
  onRemove: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  private files: FileHolder[] = [];
  private fileCounter: number = 0;
  private pendingFilesCounter: number = 0;

  isFileOver:boolean = false;

  @Input()
  buttonCaption: string = "Select Images";
  @Input()
  dropBoxMessage: string = "Drop your images here!";

  constructor(private imageService: FVFileService, private alertService:FVAlertService, private waitingService:FVWaitingService) { }

  ngOnInit() {
    if(this.multiple == true){
      $('#multi').attr('multiple','multiple');
    }else{
      $('#multi').removeAttr('multiple');
    }

  }

  getImageUrl(url){
    if(url) {
      var filename = url.substr(url.indexOf(".")+1 );
      if(filename != 'pdf'){
        return '/download?f=' + url;
      }else{
        return '../../../assets/pdf-image.png';
      }

    }else{
      return '../../../assets/user-n.png';
    }
  }


  fileChange(files) {
    let remainingSlots = this.countRemainingSlots();
    let filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
    if (filesToUploadNum != 0) {
      this.isPending.emit(true);
    }
    this.fileCounter += filesToUploadNum;

    this.uploadFiles(files, filesToUploadNum);
    $("#multi").val('');
  }
  private uploadFiles(files, filesToUploadNum) {
    for (let i = 0; i < filesToUploadNum; i++) {
      let file = files[i];
      let img = document.createElement('img');
      img.src = window.URL.createObjectURL(file);
      let reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        let fileHolder: FileHolder = new FileHolder(event.target.result, file);
        fileHolder.serverResponse = `good boy: ${i}`;
        var filename = fileHolder.src.substr(fileHolder.src.indexOf("/")+1,3 );
        if(filename == 'pdf')
          fileHolder.src = '../../../assets/pdf-image.png';
        this.uploadSingleFile(fileHolder);
        this.files.push(fileHolder);
      }, false);
      reader.readAsDataURL(file);
    }
  }

  private uploadSingleFile(fileHolder: FileHolder) {
    this.waitingService.sendMessage({waiting:true,text:'Đang upload'});
    if (fileHolder) {
      this.pendingFilesCounter++;
      fileHolder.pending = true;

      this.imageService.upload([fileHolder.file], {thumbnail: this.thumbnail}, this._headers).subscribe(nppRes => {
        fileHolder.serverResponse = nppRes;
        if(fileHolder.serverResponse.result != -1){
          this.onFileUploadFinish.emit(fileHolder);
          this.waitingService.sendMessage({waiting:false,text:'Upload thành công'});
        }else{
          this.waitingService.sendMessage({waiting:false,text:''});
          this.alertService.success(fileHolder.serverResponse.message,false, 'warning');
        }
        fileHolder.pending = false;
        if (--this.pendingFilesCounter == 0) {
          this.isPending.emit(false);
        }
      });
    } else {
      this.onFileUploadFinish.emit(fileHolder);
    }
  }
  private deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.fileCounter--;
    this.onRemove.emit(file);
    this.onFileUploadFinish.emit(file);
  }
  fileOver(isOver) {
    this.isFileOver = isOver;
  }
  private countRemainingSlots() {
    return this.max - this.fileCounter;
  }
}

