import { Component, OnInit, HostListener } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import mediumZoom from 'medium-zoom';
// import * as $ from 'jquery';
import * as html2pdf from 'html2pdf.js';

declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})



export class HelpCenterComponent implements OnInit {
  images: any;

  constructor() { }
  isShow: boolean;
  topPosToStartShowing = 100;



  // public generatepdf() {

  //   const data = document.getElementById('pdf-cover');
  //   html2canvas(data).then(canvas => {
  //     const imgWidth = 208;
  //     const pageHeight = 350;
  //     const imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;
  //     const contentDataURL = canvas.toDataURL('image/png');
  //     const pdf = new jspdf('p', 'mm', 'a4');
  //     let position = 8;
  //     //let margin = 16;
  //     pdf.addImage(contentDataURL, 'PNG', 8, position, imgWidth-24, imgHeight+24);
  //     heightLeft -= pageHeight;
  //     while (heightLeft >= 0) {
  //           position = heightLeft - imgHeight;
  //           pdf.addPage();
  //           pdf.addImage(contentDataURL, 'PNG', 8, position, imgWidth-24, imgHeight+24);
  //           heightLeft -= pageHeight;
  //         }
  //     pdf.save('help-center.pdf');
  //   });

  // }




  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }


  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  generatepdf(){
    let element = document.getElementById('pdf-cover');
    let opt = {
      margin: 10,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      enableLinks:true,
      html2canvas: { scale: 2, dpi: 300, letterRendering: true },
      jspdf: { unit: 'px', format: 'a4', orientation: 'portrait', position: 0, pagesplit: true, compress:true }
    };
    html2pdf().from(element).set(opt).save();
    //html2pdf(element)
    console.log('----------------',element)
  }

  ngOnInit() {

    // console.log('000000',html2pdf())
// 
    

    // New Promise-based usage:
    

  }



  ngAfterViewInit() {

    //mediumZoom('img');
    mediumZoom('[data-zoomable]');
  }
}
