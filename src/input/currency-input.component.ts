import {FormBuilder, NgControl } from "@angular/forms";
import {Component, Directive, Output, EventEmitter, Input, ChangeDetectorRef} from "@angular/core";
declare global {
  interface String {
    splice(idx, rem, s): string;
  }
}
String.prototype.splice = function(idx, rem, s) {
  return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};

@Directive({
  selector: '[formControlName][currency]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown.backspace)':'onInputChange($event.target.value, true)'
  }
})
export class CurrencyMaskDirective {
  constructor(public model: NgControl, private _changeDetectionRef: ChangeDetectorRef) {}

  @Output() rawChange:EventEmitter<string> = new EventEmitter<string>();


  onInputChange(event, backspace) {
    if(event){
      event = event.toString();
      // remove all mask characters (keep only numeric)
      // var newVal = event.replace(/\D/g, '');
      var value = event.replace(/,/g, '');
      var newVal = value.replace(/[^0-9]/g, ''); // chỉ cho nhập số
      var rawValue = newVal;
      // special handling of backspace necessary otherwise
      // deleting of non-numeric characters is not recognized
      // this laves room for improvment for example if you delete in the
      // middle of the string
      if(backspace) {
        newVal = newVal.substring(0, newVal.length);
      }

      // don't show braces for empty value
      if(newVal.length == 0) {
        newVal = '';
      }
      // don't show braces for empty groups at the end
      else {

        while (newVal.charAt(0) == '0') {
          newVal = newVal.substr(1);
        }

        newVal = newVal.replace(/[^\d.\',']/g, '');

        var point = newVal.indexOf(".");
        if (point >= 0) {
          newVal = newVal.slice(0, point + 3);
        }

        var decimalSplit = newVal.split(".");
        var intPart = decimalSplit[0];
        var decPart = decimalSplit[1];

        intPart = intPart.replace(/[^\d]/g, '');
        if (intPart.length > 3) {
          var intDiv = Math.floor(intPart.length / 3);
          while (intDiv > 0) {
            var lastComma = intPart.indexOf(",");
            if (lastComma < 0) {
              lastComma = intPart.length;
            }

            if (lastComma - 3 > 0) {
              intPart = intPart.splice(lastComma - 3, 0, ",");
            }
            intDiv--;
          }
        }

        if (decPart === undefined) {
          decPart = "";
        }
        else {
          decPart = "." + decPart;
        }
        var res = intPart + decPart;

      }
      // set the new value
      this.model.valueAccessor.writeValue(res);
      this.rawChange.emit(rawValue);
      this._changeDetectionRef.detectChanges();
    }

  }
}

@Component({
  selector: 'currency-input',
  templateUrl: './currency-input.component.html'
})
export class CurrencyInput {
  @Input() placeholder: any;
  @Input() checkValid:boolean;
  @Output() onBlur = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  _value: string;

  form: any;
  constructor(fb:FormBuilder, private _changeDetectionRef: ChangeDetectorRef) {
    this.form=fb.group({
      currency:['']
    })
  }

  @Input()
  get value() {
    return this._value;
  }

  set value(value){
    this._value = value;
    this.valueChange.emit(this._value);
    this._changeDetectionRef.detectChanges();
  }
  onValueChanged(value){
    this.value = value;
    this._changeDetectionRef.detectChanges();
  }
  onBlurChange(){
    if(this.checkValid){
      if( this.value==''){
        this.onBlur.emit(false);
      }
      else{
        this.onBlur.emit(true);
      }
    }
  }
}
