import {Component} from '@angular/core';
import {WaitingService} from "./waiting.service";


@Component({
  moduleId: module.id,
  selector: 'fv-waiting',
  templateUrl: './waiting.component.html'
})

export class FVWaitingComponent {
  message:any = {waiting:false};
  constructor(private waitingService: WaitingService) {
  }

  ngOnInit() {
    this.waitingService.getMessage().subscribe(message => {
      if(message){
        this.message = message;
      }
    });
  }
}
