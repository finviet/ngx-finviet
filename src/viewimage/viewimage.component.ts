import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'fv-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css']
})
export class FVViewimageComponent implements OnInit {
  @Input() imgs;
  @Input() index;
  config = {
    initialSlide:'',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0
  };
  //config[initialSlide] = this.index;
  constructor() {

  }

  ngOnInit() {
   this.config.initialSlide = this.index;
    console.log('xem this.index dsa',this.index);
  }
  getUrl(img){
    var abc = ''
    var filename = img.substr(img.indexOf(".")+1 );
    if(filename != 'pdf'){
      abc = '/download?f='+img;
    }else{
      abc = '../../../assets/pdf-image.png';
    }
    return abc;
  }
}
