import {Component} from '@angular/core';
import {AlertService} from "./alert.service";
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from "angular2-toaster";


@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  config: ToasterConfig;
  constructor(private alertService: AlertService, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if(message){
        this.showToast(message.type, 'Alert', message.text);
        setTimeout(()=>{
          this.toasterService.clear();
        },2000);
      }
    });
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 2000,
      newestOnTop: true,
      tapToDismiss: false,
      preventDuplicates: false,
      animation: 'flyRight',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 2000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
