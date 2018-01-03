import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'npp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
/*  @Input() label: any;*/
  @Input() placeholder: any;
  @Output() valueChange = new EventEmitter();
  _value: string;
  constructor() {
  }

  ngOnInit() {

  }

  @Input()
  get value() {
    return this._value;
  }

  set value(value){
    this._value = value;
    this.valueChange.emit(this._value);
  }
  onValueChanged(value){
    this.value = value.target.value;
  }
}
